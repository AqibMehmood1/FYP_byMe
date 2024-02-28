import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
