import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHabitacionesComponent } from './main-habitaciones.component';

describe('MainHabitacionesComponent', () => {
  let component: MainHabitacionesComponent;
  let fixture: ComponentFixture<MainHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHabitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
