import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftmanagementComponent } from './softmanagement.component';

describe('SoftmanagementComponent', () => {
  let component: SoftmanagementComponent;
  let fixture: ComponentFixture<SoftmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftmanagementComponent]
    });
    fixture = TestBed.createComponent(SoftmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
