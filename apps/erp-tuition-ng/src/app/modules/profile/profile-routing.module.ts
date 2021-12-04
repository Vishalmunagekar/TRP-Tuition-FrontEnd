import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component : ProfileComponent,
    canActivate : [ AuthGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
