import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormEmpleadosComponent } from './app-form-empleados.component';

describe('AppFormEmpleadosComponent', () => {
  let component: AppFormEmpleadosComponent;
  let fixture: ComponentFixture<AppFormEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFormEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFormEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
