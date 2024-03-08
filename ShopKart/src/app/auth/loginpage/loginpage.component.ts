import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../servies/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private loginService:AuthService,
    private router: Router) {
      
    }

   

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
        if(res.message ==='nouser')
        {
          this.toastr.error("Invalid credentials") 
        }
      
        if (res.user.userType === 'admin') {
          this.toastr.success("Welcome Admin") 

          localStorage.setItem('userEmail', res.user.email);
          localStorage.setItem('userType', res.user.userType);
          localStorage.setItem('userId', res.user._id);


          this.router.navigate(['/adminhome']);
        } else if (res.user.userType === 'user') {

          localStorage.setItem('userEmail', res.user.email);
          localStorage.setItem('userType', res.user.userType);
          localStorage.setItem('userId', res.user._id);


          this.toastr.success("Welcome User") 
          this.router.navigate(['/userhome']); // Navigate to user home
        } else {
          this.toastr.error(res.message)  
        }
      }
      )
      // Add any further actions you want to perform on successful form submission
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
    
  }
}
