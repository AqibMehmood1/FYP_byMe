import { Component,OnInit } from '@angular/core';
import { ProjectService } from '../service1.service';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from './group-popup/group-popup.component';
@Component({
  selector: 'app-groupmanagement',
  templateUrl: './groupmanagement.component.html',
  styleUrls: ['./groupmanagement.component.css']
})
export class GroupmanagementComponent{
  // projects: any[] = [];

  // constructor(private projectService: ProjectService) { }

  // ngOnInit() {
  //   this.projectService.getProjects().subscribe(data => {
  //     this.projects = data;
  //   });
  // }
  constructor(public dialog: MatDialog) {}

  openPopupForm(): void {
    const dialogRef = this.dialog.open(GroupPopupComponent, {
      // width: '500px', 
      width: '400px',
    });

    // Optionally, you can subscribe to the afterClosed event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if needed
    });
  }

}