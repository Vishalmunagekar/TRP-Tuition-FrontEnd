import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient : HttpClient) { }

  login(credentials:{username: string, password:string}){
    //console.log(credentials);
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  signUp(credentials:{username: string, password:string}){
    return this.httpClient.post("url", credentials);
  }

  getAllUsers(){
    //return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
