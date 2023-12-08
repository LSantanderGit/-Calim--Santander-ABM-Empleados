import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { EmpleadoService } from '../../services/empleados/empleados.service';

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
  empleados: any[] = [];
  columnas: string[] = [];

  constructor(private EmpleadoService: EmpleadoService) {}

  ngOnInit() {
    this.empleados = this.EmpleadoService.getEmployees();

    if (this.empleados.length > 0) {
      this.columnas = Object.keys(this.empleados[0]);
    }
  }
  
  addEmployee() {
    alert('¡Sos re capo!');
  }
}
