import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/container/auth.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

const routes: Routes = [
  {
    path: "auth",
    component : AuthComponent,
    children: [
      {
        path:"",
        loadChildren : () => AuthRoutingModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
