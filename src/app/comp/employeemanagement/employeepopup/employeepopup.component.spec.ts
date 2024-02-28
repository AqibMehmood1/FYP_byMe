import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepopupComponent } from './employeepopup.component';

describe('EmployeepopupComponent', () => {
  let component: EmployeepopupComponent;
  let fixture: ComponentFixture<EmployeepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeepopupComponent]
    });
    fixture = TestBed.createComponent(EmployeepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
