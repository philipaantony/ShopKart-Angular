import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent{
  constructor(private fb: FormBuilder,private toastr: ToastrService,private httpClient: HttpClient) {}

  submit = false;
  categories: any[] = [];
  getCategories() {
    this.httpClient.get('http://localhost:5000/api/categories').subscribe(
      (response) => {
        this.categories = response as any[];
        console.log(this.categories)
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
}

ngOnInit() {
  this.getCategories();
}


  productdata = this.fb.group({
    productName: ['', Validators.required],
    productDescription: ['', Validators.required],
    productCategory: ['', Validators.required],
    productPrice: ['', Validators.required],
    stockQuantity: ['', [Validators.required, this.stockQuantityValidator]],
    manufacturer: ['', Validators.required],
    imageUrl: ['', [Validators.required, this.validateImage]],
  });

  validateImage(control: AbstractControl): { [key: string]: boolean } | null {
    const file = control.value as File;
    console.log(file)
   console.log(file.type)
    // Check for missing file
    if (!file) {
      return { 'required': true };
    }
  
    // Validate file size (optional)
    const maxSize = 1024 * 1024 * 5; // 5MB limit (adjust as needed)
    if (file.size > maxSize) {
      return { 'imageTooLarge': true };
    }
  

  
    return null; // Valid image
  }
  


  get f() {
    return this.productdata.controls;
  }

  onSubmit() {
    this.submit = true;

    if (this.productdata.valid) {
      console.log("form submitted");
      console.log(this.productdata.value);
     
      
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


