import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import empleadosData from '../../../assets/data/empleados/empleados.json';

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
    MatTableModule,
    MatIconModule,
    MatButtonModule],

  templateUrl: './app-lista-empleados.component.html',
  styleUrl: './app-lista-empleados.component.scss'
})
export class AppListaEmpleadosComponent implements OnInit {
  empleados: Empleado[] = empleadosData;
  columnas: string[] = [];

  ngOnInit() {
    if (this.empleados.length > 0) {
      this.columnas = Object.keys(this.empleados[0]);
    }
  }
  
  addEmployee() {
    alert('¡Sos re capo!');
  }
}
