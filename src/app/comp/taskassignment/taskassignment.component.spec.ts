import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskassignmentComponent } from './taskassignment.component';

describe('TaskassignmentComponent', () => {
  let component: TaskassignmentComponent;
  let fixture: ComponentFixture<TaskassignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskassignmentComponent]
    });
    fixture = TestBed.createComponent(TaskassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
