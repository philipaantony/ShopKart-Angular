// addcategory.component.ts

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css'] // Fix the property name to styleUrls
})
export class AddcategoryComponent {
  constructor(private fb: FormBuilder,private toastr: ToastrService,private httpClient: HttpClient) {}
  submit = false;

  categoryfrom = this.fb.group({
    category: ['', Validators.required],
  
  });

  get geterror() {
    return this.categoryfrom.controls;
  }
  ngOnInit() {
    this.getCategories();
  }


  categories: any[] = [];
  getCategories() {
    this.httpClient.get('http://localhost:5000/api/categories').subscribe(
      (response) => {
        this.categories = response as any[];
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
}

  onSubmit() {
    this.submit = true;

    if (this.categoryfrom.valid) {
      console.log("Form submitted");
      const category = this.categoryfrom.value.category;
      
      this.httpClient.post('http://localhost:5000/api/categories', { category }).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          this.getCategories();
          this.toastr.success('Form submitted successfully', 'Success');
        },
        (error) => {
          console.error('Error submitting form:', error.error);
          this.toastr.error(error.error.error);
        }
      );
    } else {
      console.log("Form is not valid. Please check the errors.");
    }
}

}
