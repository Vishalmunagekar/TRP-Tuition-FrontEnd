import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './container/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [ CommonModule, RouterModule, IconModule ],
  exports: [AuthComponent, LoginComponent, SignupComponent]
})
export class AuthModule { }
