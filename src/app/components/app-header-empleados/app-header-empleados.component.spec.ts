import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderEmpleadosComponent } from './app-header-empleados.component';

describe('AppHeaderEmpleadosComponent', () => {
  let component: AppHeaderEmpleadosComponent;
  let fixture: ComponentFixture<AppHeaderEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHeaderEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
