import { Component, OnInit } from '@angular/core';
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
export class AppListaEmpleadosComponent implements OnInit {
  empleados: Empleado[] = empleadosData;
  columnas: string[] = [];

  ngOnInit() {
    // Asigna las columnas dinámicamente basadas en el primer elemento del array JSON
    if (this.empleados.length > 0) {
      this.columnas = Object.keys(this.empleados[0]);
    }
  }
}
