import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {


  constructor(private router: Router, private toastr: ToastrService) {
   
  }

  logout(): void {
    // Implement your logout logic here
    // For example, clear user data from sessionStorage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userType');
    localStorage.removeItem('userId');
    this.toastr.success("Logout Successful") 
    // Redirect to the login page or any other desired route
    this.router.navigate(['/']);
  }

}
