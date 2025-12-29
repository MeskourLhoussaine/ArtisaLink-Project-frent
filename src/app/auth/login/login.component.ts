import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.error = false;

      // Fake login success
      localStorage.setItem('user', 'admin');

      // Redirect to HOME
      this.router.navigate(['/dashboard']);
    } else {
      this.error = true;
    }
  }
}
