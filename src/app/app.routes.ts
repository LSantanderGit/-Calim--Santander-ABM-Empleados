import { Routes } from '@angular/router';

import { AppListaEmpleadosComponent } from './components/app-lista-empleados/app-lista-empleados.component';
import { AppFormEmpleadosComponent } from './components/app-form-empleados/app-form-empleados.component';

export const routes: Routes = [
    { path: 'empleados', component: AppListaEmpleadosComponent },
    { path: 'form-empleados', component: AppFormEmpleadosComponent },
    { path: '', redirectTo: '/empleados', pathMatch: 'full' }, // Set a default route
];
