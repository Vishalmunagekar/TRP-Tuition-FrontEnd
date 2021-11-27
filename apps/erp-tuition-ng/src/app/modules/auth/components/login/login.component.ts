import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'erp-tuition-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  loginForm:FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      password: new FormControl('',[Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
    });
   }

  ngOnInit(): void {
    console.log("LoginComponent works...")
    this.authService.isLoggedIn.subscribe((value:boolean)=>{
      this.isLoggedIn = value;
      if(this.isLoggedIn === true){
        this.router.navigate(['dashboard'])
      }
    });
  }

  login(){
    if(this.loginForm.valid){
    this.authService.login(this.loginForm.value);
    }
  }

  getAllUsers(){
    this.authService.getAllUsers();
  }

  get getFormControls() {
    return this.loginForm.controls;
  }

}
