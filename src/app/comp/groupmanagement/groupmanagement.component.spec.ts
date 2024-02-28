import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmanagementComponent } from './groupmanagement.component';

describe('GroupmanagementComponent', () => {
  let component: GroupmanagementComponent;
  let fixture: ComponentFixture<GroupmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupmanagementComponent]
    });
    fixture = TestBed.createComponent(GroupmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
