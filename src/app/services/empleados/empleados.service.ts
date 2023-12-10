// employee.service.ts
import { Injectable } from '@angular/core';
import empleadosData from '../../../assets/data/empleados/empleados.json';

interface Empleado {
  id: number;
  name: string;
  jobTitle: string;
  department: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private employees: Empleado[] = empleadosData;

  getEmployees(): Empleado[] {
    return this.employees;
  }

  addEmployee(newEmployee: Empleado): void {
    const newId = this.generateNewId();
    newEmployee.id = newId;
    this.employees.push(newEmployee);
    this.updateJsonFile();
  }

  private generateNewId(): number {
    const maxId = this.employees.reduce((max, emp) => (emp.id > max ? emp.id : max), 0);
    return maxId + 1;
  }

  private updateJsonFile(): void {
    const jsonString = JSON.stringify(this.employees, null, 2);
    const filePath = '../../../assets/data/empleados/empleados.json';
    fetch(filePath, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonString,
    })
      .then((response) => response.json())
      .then((data) => console.log('JSON file updated:', data))
      .catch((error) => console.error('Error updating JSON file:', error));
  }
}