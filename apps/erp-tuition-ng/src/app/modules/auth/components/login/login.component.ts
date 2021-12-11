import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from '@erp-tuition-frontend/shared';
import { AppSessionStorageService } from '@erp-tuition-frontend/shared';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { AuthenticationResponse } from '../../models/AuthenticationResponse';

@Component({
  selector: 'erp-tuition-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  loginForm:FormGroup;
  constructor(private authService: AuthService,
              private router: Router,
              private toastService: ToastService,
              private sessionStorageService : AppSessionStorageService) {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      password: new FormControl('',[Validators.required ]) //Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
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

      const credentials : AuthenticationRequest = {
        username : this.loginForm.value.username,
        password:this.loginForm.value.password
      };

      this.authService.login(credentials, "student").subscribe(( response:AuthenticationResponse) => {
        console.log(response.username)
          if(response != null ){
              this.authService.isLoggedIn.next(true);
              this.sessionStorageService.store("AuthenticationResponse", response);
              this.showToast("User " + response.username + " successfully logged in");
          }
      });
    }
  }

  showToast(message:string){
    this.toastService.showSuccess(message);
  }

  getAllUsers(){
    this.authService.getAllUsers();
  }

  get getFormControls() {
    return this.loginForm.controls;
  }

}
