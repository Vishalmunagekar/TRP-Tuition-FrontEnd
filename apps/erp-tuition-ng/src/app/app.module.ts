import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconModule } from './modules/icon/icon.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppCommonModule } from './modules/common/app-common.module';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    IconModule,
    HttpClientModule,
    RouterModule,
    AuthModule,
    DashboardModule,
    NavigationModule,
    AppCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
