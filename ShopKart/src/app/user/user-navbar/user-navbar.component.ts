import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {


  constructor(private router: Router) {}

  logout(): void {
    // Implement your logout logic here
    // For example, clear user data from sessionStorage
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('userId');

    // Redirect to the login page or any other desired route
    this.router.navigate(['/']);
  }

}
