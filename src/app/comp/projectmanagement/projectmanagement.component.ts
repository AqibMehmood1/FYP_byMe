import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectpopupComponent } from './projectpopup/projectpopup.component';

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.css']
})
export class ProjectmanagementComponent {
  constructor(public dialog: MatDialog) {}

  openPopupForm(): void {
    const dialogRef = this.dialog.open(ProjectpopupComponent, {
      width: '450px',
    });

    // Optionally, you can subscribe to the afterClosed event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if needed
    });
  }
}
