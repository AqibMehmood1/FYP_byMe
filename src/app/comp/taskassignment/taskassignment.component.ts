import { ProjectService } from '../service1.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskpopupComponent } from './taskpopup/taskpopup.component';
@Component({
  selector: 'app-taskassignment',
  templateUrl: './taskassignment.component.html',
  styleUrls: ['./taskassignment.component.css']
})
export class TaskassignmentComponent {
  Employees: any[] = [];
  constructor(private projectService: ProjectService,public dialog: MatDialog){  }
  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.Employees = data;
    });
  }

  openPopupForm(id:any,title:any): void {
    const dialogRef = this.dialog.open(TaskpopupComponent, {
      width: '400px',
      data: {
      id: id,
      title:title,
    }
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if needed
    });
  }
}
