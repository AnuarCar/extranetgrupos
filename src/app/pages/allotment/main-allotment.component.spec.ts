import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAllotmentComponent } from './main-allotment.component';

describe('MainAllotmentComponent', () => {
  let component: MainAllotmentComponent;
  let fixture: ComponentFixture<MainAllotmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAllotmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
