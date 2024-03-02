import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(data:any)
  {
    console.log(data)
    return this.http.post<any>('http://localhost:5000/api/userreg',data)
  }

  Login(data:any)
  {
    console.log(data)
    return this.http.post<any>('http://localhost:5000/api/login',data)
  }

  getallUsers()
  {
    return this.http.get<any>('http://localhost:5000/api/allusers')
  }
}
