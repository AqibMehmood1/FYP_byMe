import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-softpopup',
  templateUrl: './softpopup.component.html',
  styleUrls: ['./softpopup.component.css']
})
export class SoftpopupComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SoftpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: '',
      email: '',
      contact: '',
      address: '',
      logo:'',
      password:'',
    });
  }

  onSubmit(): void {
    console.warn(this.form.value)
    this.dialogRef.close();
  }

  onCancel(): void {
    // Close the dialog without doing anything
    this.dialogRef.close();
  }
}