import { Injectable } from '@angular/core';
import { HttpClient } from '@angular//common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private readonly apiUrl = "http://proximitydesktestapp.azurewebsites.net/api/TokenAuth/Authenticate";

  constructor(private http:HttpClient, private router:Router) { }

  numberUp(num) {
    return num + 1;
  }

  login(obj){
    return this.http.post(this.apiUrl , obj);
  }

  isLogin():boolean {
    const token = localStorage.getItem('accessToken');
    
    if(token) {
      return true;

    }
      
    else {
      this.router.navigate(['login']);
      return false;
    }
      
  }

}
