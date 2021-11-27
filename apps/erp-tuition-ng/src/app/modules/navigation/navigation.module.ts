import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavContainerComponent } from './container/top-nav-container/top-nav-container.component';
import { FooterContainerComponent } from './container/footer-container/footer-container.component';



@NgModule({
  declarations: [TopNavComponent, FooterComponent, TopNavContainerComponent, FooterContainerComponent ],
  imports: [CommonModule, IconModule, RouterModule],
  exports: [TopNavContainerComponent, TopNavComponent, FooterComponent]
})
export class NavigationModule { }
