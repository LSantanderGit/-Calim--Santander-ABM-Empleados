import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmpleadoService } from '../../services/empleados/empleados.service';

@Component({
  selector: 'app-app-form-empleados',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app-form-empleados.component.html',
  styleUrl: './app-form-empleados.component.scss'
})
export class AppFormEmpleadosComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  newEmployee: any = {};

  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  agregarEmpleadoForm(): void {
    if (!this.isValidForm()) {
      return;
    }
  
    this.empleadoService.agregarEmpleado(this.newEmployee).subscribe(() => {
      this.newEmployee = {};
      this.router.navigate(['/empleados']);
    });
  }

  isValidForm(): boolean {
    return (
      this.newEmployee.name && this.newEmployee.jobTitle && this.newEmployee.department
    );
  }
}