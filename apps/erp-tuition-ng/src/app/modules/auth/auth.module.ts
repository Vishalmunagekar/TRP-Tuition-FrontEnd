import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './container/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor';
import { SharedModule } from '@erp-tuition-frontend/shared';



@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [ CommonModule, RouterModule, FormsModule, HttpClientModule, ReactiveFormsModule, SharedModule ],
  providers: [ AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthenticationInterceptor,
      multi: true
    }
  ],
  exports: [AuthComponent, LoginComponent, SignupComponent, SharedModule ]
})
export class AuthModule { }
