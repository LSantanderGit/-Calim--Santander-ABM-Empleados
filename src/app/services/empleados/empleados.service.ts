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
    this.employees.push(newEmployee);
  }
}
