import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'nombre', 'puesto', 'departamento'];

  constructor(private empleadoService: EmpleadoService, private router: Router) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit() {
    this.dataSource.data = this.empleadoService.getEmployees();
  }
  
  addEmployee() {
    //alert('¡Sos re capo!');
    this.router.navigate(['/form-empleados']);
  }
}