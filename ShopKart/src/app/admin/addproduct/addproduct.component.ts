import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent{
  constructor(private fb: FormBuilder) {}

  submit = false;

  registerdata = this.fb.group({
    productName: ['', Validators.required],
    productDescription: ['', Validators.required],
    productCategory: ['', Validators.required],
    productPrice: ['', Validators.required],
    stockQuantity: ['', [Validators.required, this.stockQuantityValidator]],
    manufacturer: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });

  get f() {
    return this.registerdata.controls;
  }

  onSubmit() {
    this.submit = true;

    if (this.registerdata.valid) {
      console.log("form submitted");
      console.log(this.registerdata.value);
     
      
      // Add any further actions you want to perform on successful form submission
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
  }

  stockQuantityValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value !== null && (value <= 0 || isNaN(value))) {
      return { 'invalidStockQuantity': true };
    }
    return null;
  }
}


