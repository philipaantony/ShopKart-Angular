import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../servies/auth.service';

@Component({
  selector: 'app-userregpage',
  templateUrl: './userregpage.component.html',
  styleUrls: ['./userregpage.component.css']
})
export class UserregpageComponent {
  constructor(private fb: FormBuilder,private authService:AuthService) {}

  submit = false;

  registerdata = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required,],
  }, { validators: this.passwordMatchValidator });

  get f() {
    return this.registerdata.controls;
  }

  onSubmit() {
    this.submit = true;

    if (this.registerdata.valid) {
      console.log("form submitted");
      console.log(this.registerdata.value);
      this.authService.registerUser(this.registerdata.value).subscribe((res)=>
      {
        alert(res.message)
      }
      )
      // Add any further actions you want to perform on successful form submission
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
  }

  // Custom validator for password match
  private passwordMatchValidator(form: any) {
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword');
    
    // Set the passwordMismatch error explicitly on the confirmPassword control
    if (password !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } 
    else if(confirmPassword.value === null || confirmPassword.value === '') {
      confirmPassword.setErrors({ required: true });
    }
    else {
      confirmPassword.setErrors(null);
    }

    return null; // The validation logic is done by setting errors directly on the control
  }
}