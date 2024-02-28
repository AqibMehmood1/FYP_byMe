import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
@Component({
  selector: 'app-home',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  
})
export class UsermanagementComponent {
  constructor(private dialogref: MatDialog){}
  OpenDialog(){
    this.dialogref.open(PopupComponent)
  }
}