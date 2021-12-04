import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileContainerComponent } from './container/profile-container.component';
import { ProfileComponent } from './components/profile.component';


@NgModule({
  declarations: [
    ProfileContainerComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileContainerComponent,
    ProfileComponent
  ]
})
export class ProfileModule { }
