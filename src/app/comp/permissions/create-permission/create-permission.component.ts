import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.css']
})
export class CreatePermissionComponent {
  form: FormGroup;
  options = [
    { value: 'Read', label: 'Read' },
    { value: 'Create', label: 'Create' },
    { value: 'Update', label: 'Update' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOptions: [[]] // Initialize with an empty array for multiple selection
    });
  }
}
