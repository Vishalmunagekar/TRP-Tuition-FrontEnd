import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'erp-tuition-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("LoginComponent works...")
    this.authService.isLoggedIn.subscribe((value:boolean)=>{
      this.isLoggedIn = value;
      if(this.isLoggedIn === true){
        this.router.navigate(['dashboard'])
      }
    });
  }

  login(loginForm: NgForm){
    this.authService.login(loginForm.value);
  }

  getAllUsers(){
    this.authService.getAllUsers();
  }

}
