import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftpopupComponent } from './softpopup.component';

describe('SoftpopupComponent', () => {
  let component: SoftpopupComponent;
  let fixture: ComponentFixture<SoftpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftpopupComponent]
    });
    fixture = TestBed.createComponent(SoftpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
