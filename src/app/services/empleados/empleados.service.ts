// employee.service.ts
import { Injectable } from '@angular/core';
import { EmpleadosInterface } from '../../interfaces/empleados-interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private empleadosSubject: BehaviorSubject<EmpleadosInterface[]> = new BehaviorSubject<EmpleadosInterface[]>([]);
  public empleados$: Observable<EmpleadosInterface[]> = this.empleadosSubject.asObservable();
  private apiUrl = 'http://localhost:3000/empleados';

  constructor(private http: HttpClient) {}

  cargarEmpleados(): void {
    this.http.get<EmpleadosInterface[]>(this.apiUrl).subscribe((data) => {
      this.empleadosSubject.next(data);
    });
  }

  getEmpleados(): EmpleadosInterface[] {
    return this.empleadosSubject.value;
  }

  agregarEmpleado(nuevoEmpleado: EmpleadosInterface): Observable<EmpleadosInterface> {
    return this.http.post<EmpleadosInterface>(this.apiUrl, nuevoEmpleado);
  }
}