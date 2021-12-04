import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@erp-tuition-frontend/shared';
import { ProfileModule } from './modules/profile/profile.module';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    NavigationModule,
    NgxWebstorageModule.forRoot(),
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
