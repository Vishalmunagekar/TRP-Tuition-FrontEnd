import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AppSessionStorageService } from '@erp-tuition-frontend/shared';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLoggedIn = false;

  constructor(private authService : AuthService,
              private router: Router,
              private sessionStorageService : AppSessionStorageService){
    console.log('AuthGuard works');
    this.authService.isLoggedIn.subscribe((value:boolean) => {
      this.isLoggedIn = value;
      if (this.isLoggedIn == false) {
        console.log("if block called in Authguard")
        const user:User =  this.sessionStorageService.retrieve("user");
        if (user != null || user != undefined) {
          this.authService.isLoggedIn.next(true);
        }
      }
    })
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot )
                  : Observable<boolean |
                    UrlTree> |
                    Promise<boolean |
                    UrlTree> |
                    boolean |
                    UrlTree
                    {
    console.log(state);
    console.log(route);
    if(this.isLoggedIn == false){
      this.router.navigate(['auth']);
    }
    return this.isLoggedIn;
  }

}
