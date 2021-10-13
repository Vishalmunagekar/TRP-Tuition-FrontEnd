import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';
import { DashboardComponent } from './container/dashboard.component';



@NgModule({
  declarations: [ DashboardComponent ],
  imports: [ CommonModule, RouterModule, IconModule ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
