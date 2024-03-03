import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  userEmail: string = ''; // Initialize userEmail

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('userEmail') || '';
    const userEmailElement = document.getElementById('userEmail');
    if (userEmailElement) {
      userEmailElement.innerText = this.userEmail;
    }
  }
}
