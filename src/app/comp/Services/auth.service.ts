import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private userEmail: string = '';

  login(email: string, password: string): boolean {
    // Add your authentication logic here (e.g., call a service to check credentials)
    // For simplicity, using hardcoded credentials
    if (email === 'aqib@gmail.com' && password === '112233') {
      this.isLoggedIn = true;
      this.userEmail = email;
      return true;
    }
    else if (email === 'mehwish@gmail.com' && password === '112233') {
      this.isLoggedIn = true;
      this.userEmail = email;
      return true;
    }
    else {
      this.isLoggedIn = false;
      this.userEmail = '';
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userEmail = '';
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getUserEmail(): string {
    return this.userEmail;
  }
}