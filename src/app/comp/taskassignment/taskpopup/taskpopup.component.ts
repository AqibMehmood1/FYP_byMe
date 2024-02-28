import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../service1.service';
@Component({
  selector: 'app-taskpopup',
  templateUrl: './taskpopup.component.html',
  styleUrls: ['./taskpopup.component.css']
})
export class TaskpopupComponent {
  Employees: any[] = [];
  form: FormGroup;
  constructor(private projectService: ProjectService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: '',
      email: '',
      contact: '',
      Address: '',
      userRole: '',

    });
  }
  ngOnInit() {
    this.projectService.getGroups().subscribe(data => {
      this.Employees = data;
    });
    // console.warn(this.Employees)
  }
  onSubmit(): void {
      console.warn(this.form)
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}