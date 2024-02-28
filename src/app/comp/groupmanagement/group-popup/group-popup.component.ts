import { Component, OnInit ,Inject} from '@angular/core';
import { ProjectService } from '../../service1.service';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-group-popup',
  templateUrl: './group-popup.component.html',
  styleUrls: ['./group-popup.component.css']
})
export class GroupPopupComponent {
  Employees: any[] = [];
  dropdownList: any;
  dropdownSettings: any;
  form: FormGroup;
  buttonText: string = 'Add Group Member';
  constructor(private projectService: ProjectService,private fb: FormBuilder,public dialogRef: MatDialogRef<GroupPopupComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      title: '',
      discription: '',
      modules: this.fb.array([]) ,
    });
  }
  ngOnInit() {
    this.form = this.fb.group({
      employee: []
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };

    this.projectService.getEmployee().subscribe(data => {
      this.Employees = data;
      this.dropdownList = this.mapEmployeesToDropdown(this.Employees);
    });
  }
  handleButtonClick() {
    console.log('Selected Employees: ', this.form.value.employee);
  }

  onItemSelect($event: any) {
    console.log('$event is ', $event);
  }

  mapEmployeesToDropdown(employees: any[]): any[] {
    return employees.map(employee => ({
      item_id: employee.id,
      item_text: employee.name,
    }));
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
    this.buttonText = 'Add More Member';

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