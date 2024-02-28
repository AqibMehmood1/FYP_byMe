import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string=''
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const isAuthenticated = this.authService.login(this.email, this.password);

    if (isAuthenticated) {
      // Redirect to admin panel or perform any other actions upon successful login
    } else {
      // Handle unsuccessful login (show error message, etc.)
      console.log('Invalid credentials');
      this.error='Incorrect email or passwod';
      // this.toastr.success('Invalid credentials!', 'Success');
    }
  }
}