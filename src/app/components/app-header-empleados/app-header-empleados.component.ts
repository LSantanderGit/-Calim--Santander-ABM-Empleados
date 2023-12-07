import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-app-header-empleados',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './app-header-empleados.component.html',
  styleUrl: './app-header-empleados.component.scss'
})
export class AppHeaderEmpleadosComponent {

}
