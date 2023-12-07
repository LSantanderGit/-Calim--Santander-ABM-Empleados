import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import empleadosData from '../../../assets/data/empleados/empleados.json';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

interface Empleado{
  id: number;
  name: String;
  jobTitle: String;
  department: String;
}

@Component({
  selector: 'app-app-lista-empleados',  
  standalone: true,
  imports: [CommonModule, 
    MatTableModule],

  templateUrl: './app-lista-empleados.component.html',
  styleUrl: './app-lista-empleados.component.scss'
})
export class AppListaEmpleadosComponent {
  empleados: Empleado[] = empleadosData;
}
