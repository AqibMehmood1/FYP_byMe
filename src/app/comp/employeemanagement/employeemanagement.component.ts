import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeepopupComponent } from './employeepopup/employeepopup.component';
@Component({
  selector: 'app-employeemanagement',
  templateUrl: './employeemanagement.component.html',
  styleUrls: ['./employeemanagement.component.css']
})
export class EmployeemanagementComponent {
  constructor(public dialog: MatDialog) {}

  openPopupForm(): void {
    const dialogRef = this.dialog.open(EmployeepopupComponent, {
      width: '400px', // Adjust the width as needed
      data: { /* you can pass data to your popup component if needed */ 
      message: 'Hello from ParentComponent!',
      // You can pass any data you need to the popup
    }
  });

    // Optionally, you can subscribe to the afterClosed event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if needed
    });
  }
}
