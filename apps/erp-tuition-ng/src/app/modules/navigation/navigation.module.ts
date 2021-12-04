import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavContainerComponent } from './container/top-nav-container/top-nav-container.component';
import { FooterContainerComponent } from './container/footer-container/footer-container.component';
import { SharedModule } from '@erp-tuition-frontend/shared';



@NgModule({
  declarations: [TopNavComponent, FooterComponent, TopNavContainerComponent, FooterContainerComponent ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [TopNavContainerComponent, TopNavComponent, FooterComponent]
})
export class NavigationModule { }
