import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLoggedIn = false;

  constructor(private authService : AuthService,private router: Router){
    console.log('AuthGuard works');
    this.authService.isLoggedIn.subscribe((value:boolean) => {
      this.isLoggedIn = value;
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
