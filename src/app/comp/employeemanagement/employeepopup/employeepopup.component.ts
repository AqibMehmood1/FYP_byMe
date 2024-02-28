import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employeepopup',
  templateUrl: './employeepopup.component.html',
  styleUrls: ['./employeepopup.component.css']
})
export class EmployeepopupComponent {
  // list:any[]=[]
  form: FormGroup;
  constructor(    
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeepopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.list.push({ id: 1, name: 'aqib', contact: '048', email: 'aqib@example.com', Address: 'raiwind', userRole: 'admin'});
    this.form = this.fb.group({
      name: '',
      email: '',
      contact: '',
      Address: '',
      userRole: '',

    });
  }

  onSubmit(): void {
    // this.list.push({id:this.list.length+1,name:this.form.controls['name'].value,contact:this.form.controls['contact'].value,email:this.form.controls['email'].value,Address:this.form.controls['Address'].value,userRole:this.form.controls['Address'].value})
      console.warn(this.form)
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}