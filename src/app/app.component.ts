import { Component } from '@angular/core';
import { AuthService } from './comp/Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FYP';
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
