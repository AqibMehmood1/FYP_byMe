import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskpopupComponent } from './taskpopup.component';

describe('TaskpopupComponent', () => {
  let component: TaskpopupComponent;
  let fixture: ComponentFixture<TaskpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskpopupComponent]
    });
    fixture = TestBed.createComponent(TaskpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
