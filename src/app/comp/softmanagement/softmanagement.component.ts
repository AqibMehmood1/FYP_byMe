import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SoftpopupComponent } from './softpopup/softpopup.component';
@Component({
  selector: 'app-softmanagement',
  templateUrl: './softmanagement.component.html',
  styleUrls: ['./softmanagement.component.css']
})
export class SoftmanagementComponent {
  constructor(public dialog: MatDialog) {}

  openPopupForm(): void {
    const dialogRef = this.dialog.open(SoftpopupComponent, {
      width: '400px', // Adjust the width as needed
    });

    // Optionally, you can subscribe to the afterClosed event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if needed
    });
  }

}
