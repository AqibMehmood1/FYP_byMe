import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-projectpopup',
  templateUrl: './projectpopup.component.html',
  styleUrls: ['./projectpopup.component.css']
})
export class ProjectpopupComponent {
  form: FormGroup;
  buttonText: string = 'Add Modules';
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<ProjectpopupComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      title: '',
      discription: '',
      modules: this.fb.array([]) ,
    });
  }
  modules() : FormArray {
    return this.form.get("modules") as FormArray
  }
   
  newModules(): FormGroup {
    return this.fb.group({
      module: '',
    })
  }
   
  addQModule() {
    this.modules().push(this.newModules());
    this.buttonText = 'Add More';

  }
   
  removeModule(i:number) {
    this.modules().removeAt(i);
  }
  onSubmit(): void {
    console.warn(this.form.value)
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}