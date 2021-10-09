import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconModule } from './modules/icon/icon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, FontAwesomeModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
