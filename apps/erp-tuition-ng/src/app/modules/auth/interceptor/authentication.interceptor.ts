import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AppSessionStorageService } from '@erp-tuition-frontend/shared';
import { AuthenticationResponse } from '../models/AuthenticationResponse';
import { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  private HEADER = "Authorization";
  private TOKEN_PRIFIX = "Bearer ";
  constructor(private appSessionStorage: AppSessionStorageService,
              private authService: AuthService) {
    console.log("constructor of AuthenticationInterceptor.");
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercept called...");

    if( request.url.indexOf("login") !== -1 || request.url.indexOf("signup") !== -1 || request.url.indexOf("refresh/token") !== -1 ) {
        console.log("in bypass..")
        return next.handle(request);
    }
    const authResponse:AuthenticationResponse = this.appSessionStorage.retrieve("AuthenticationResponse");
    if(authResponse.jwtToken){
      return next.handle(this.addTokenToHeader(request, authResponse.jwtToken))
      .pipe(
          catchError((error) => {
            if(error instanceof HttpErrorResponse && error.status === 401 ) {//unuthorized
                return this.handleJwtError(request, next);
            } else {
                throw error;
            }
        })
      );
    }
    return next.handle(request);
  }

  addTokenToHeader(request: HttpRequest<unknown>, jwtToken:string){
    return request.clone({
      headers: request.headers.set(this.HEADER, this.TOKEN_PRIFIX + jwtToken)
    })
  }

  handleJwtError(request: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {
    const authResponse:AuthenticationResponse = this.appSessionStorage.retrieve("AuthenticationResponse");
    const refreshTokenReq:RefreshTokenRequest = { refreshToken: authResponse.refreshToken, username:authResponse.username }
    return this.authService.refreshToken(refreshTokenReq).pipe(
        switchMap((authenticationRes: AuthenticationResponse) => {
          this.appSessionStorage.store("AuthenticationResponse", authenticationRes);
          return next.handle( this.addTokenToHeader(request, authResponse.jwtToken));
        })
    );
  }
}
