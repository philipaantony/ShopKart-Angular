import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private fb: FormBuilder) {}

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
      // Add any further actions you want to perform on successful form submission
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
  }
}
