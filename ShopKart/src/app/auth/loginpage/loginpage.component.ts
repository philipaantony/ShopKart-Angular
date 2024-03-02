import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../servies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private fb: FormBuilder,
    private loginService:AuthService,
    private router: Router) {}

  submit = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submit = true;

    if (this.loginForm.valid) {
      console.log("Form submitted");
      console.log(this.loginForm.value);
      this.loginService.Login(this.loginForm.value).subscribe((res)=>
      {
        alert(res.message)
        alert(res.user.userType)
        if (res.user.userType === 'admin') {
          this.router.navigate(['/adminhome']); // Navigate to admin home
        } else if (res.user.userType === 'user') {
          this.router.navigate(['/adminhome']); // Navigate to user home
        } else {
          // Handle other user types or cases as needed
        }
      }
      )
      // Add any further actions you want to perform on successful form submission
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
    
  }
}
