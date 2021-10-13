import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/container/auth.component';
import { DashboardComponent } from './modules/dashboard/container/dashboard.component';

const routes: Routes = [
  {
    path : "",  pathMatch: 'full', redirectTo : "/dashboard"
  },
  {
    path : "dashboard",
    component : DashboardComponent,
    children : [
      {
        path : "",
        loadChildren : () => import('./modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
      }
    ]
  },
  {
    path: 'auth',
    component : AuthComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)
      }
    ]
  },
  {
    path : '**',
    redirectTo : '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
