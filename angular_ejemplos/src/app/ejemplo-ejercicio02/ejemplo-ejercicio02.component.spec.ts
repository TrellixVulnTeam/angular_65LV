import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploEjercicio02Component } from './ejemplo-ejercicio02.component';

describe('EjemploEjercicio02Component', () => {
  let component: EjemploEjercicio02Component;
  let fixture: ComponentFixture<EjemploEjercicio02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploEjercicio02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploEjercicio02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
