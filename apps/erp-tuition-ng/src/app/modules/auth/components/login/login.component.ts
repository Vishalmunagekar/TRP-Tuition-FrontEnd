import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from '../../../common/toast/toast.service';
import { User } from '../../models/User';

@Component({
  selector: 'erp-tuition-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  loginForm:FormGroup;
  constructor(private authService: AuthService, private router: Router,public toastService: ToastService) {
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
      this.authService.login(this.loginForm.value).subscribe((user:User[]) => {
        const index:number = user.findIndex(u => u.username === this.loginForm.value.username);
        if(index !== -1){
          this.authService.isLoggedIn.next(true);
          this.showToast('User successfully logged in');
        }
      });
    }
  }

  showToast(message:string){
    this.toastService.show(message, { classname: 'bg-success text-light text-center', delay: 5000 });
  }

  getAllUsers(){
    this.authService.getAllUsers();
  }

  get getFormControls() {
    return this.loginForm.controls;
  }

}
