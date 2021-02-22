import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesEditComponent } from './habitaciones-edit.component';

describe('HabitacionesEditComponent', () => {
  let component: HabitacionesEditComponent;
  let fixture: ComponentFixture<HabitacionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
