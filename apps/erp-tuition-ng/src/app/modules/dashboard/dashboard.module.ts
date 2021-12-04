import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './container/dashboard.container.component';
import { DashboardComponent } from './components/dashboard.component';



@NgModule({
  declarations: [ DashboardContainerComponent, DashboardComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ DashboardContainerComponent ]
})
export class DashboardModule { }
