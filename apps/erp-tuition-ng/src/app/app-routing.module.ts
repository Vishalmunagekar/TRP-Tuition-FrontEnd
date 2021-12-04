import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/container/auth.component';
import { DashboardContainerComponent } from './modules/dashboard/container/dashboard.container.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { ProfileContainerComponent } from './modules/profile/container/profile-container.component';

const routes: Routes = [
  {
    path : '',  pathMatch: 'full', redirectTo : 'dashboard'
  },
  {
    path : 'dashboard',
    component : DashboardContainerComponent,
    canActivate : [ AuthGuard ],
    children : [
      {
        path : '',
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
    path: 'profile',
    component : ProfileContainerComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./modules/profile/profile-routing.module').then(m => m.ProfileRoutingModule)
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
