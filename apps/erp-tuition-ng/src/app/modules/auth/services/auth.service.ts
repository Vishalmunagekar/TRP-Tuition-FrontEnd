import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { AuthenticationRequest } from './../models/AuthenticationRequest';
import { AuthenticationResponse } from './../models/AuthenticationResponse';
import { RefreshTokenRequest } from './../models/RefreshTokenRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient : HttpClient) { }

  login(credentials : AuthenticationRequest, userType: string){ //student, staff, parent
    return this.httpClient.post<AuthenticationResponse>(environment.LOGIN_URL + userType, credentials);
  }

  refreshToken(refreshTokenReq:RefreshTokenRequest){
    return this.httpClient.post<AuthenticationResponse>(environment.REFRESH_TOKEN_URL, refreshTokenReq);
  }

  signUp(credentials:{username: string, password:string}){ //student, staff, parent
    return this.httpClient.post("url", credentials);
  }

  getAllUsers(){
    //return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
