import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../common/toast/toast.service';

@Component({
  selector: 'erp-tuition-frontend-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isLoggedIn = false;
  constructor(private authService: AuthService,
              private router: Router,
              private toastService: ToastService) { }

  ngOnInit(): void {
    console.warn('TopNavComponent...');
    this.authService.isLoggedIn.subscribe((value:boolean)=> {
      this.isLoggedIn = value;
    })
  }


  public get getIsLoggedIn():boolean {
    return this.isLoggedIn;
  }

  logout() {
    this.authService.isLoggedIn.next(false);
    this.router.navigate(['auth']);
    this.toastService.showInfo('logged out successfully...!')
  }

}
