import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListaEmpleadosComponent } from './app-lista-empleados.component';

describe('AppListaEmpleadosComponent', () => {
  let component: AppListaEmpleadosComponent;
  let fixture: ComponentFixture<AppListaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppListaEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppListaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
