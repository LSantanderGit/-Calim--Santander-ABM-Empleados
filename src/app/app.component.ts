import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppListaEmpleadosComponent } from './components/app-lista-empleados/app-lista-empleados.component';
import { AppHeaderEmpleadosComponent } from './components/app-header-empleados/app-header-empleados.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppListaEmpleadosComponent, AppHeaderEmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'santander-abm-empleados';
}
