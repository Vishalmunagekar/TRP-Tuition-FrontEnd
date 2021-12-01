import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    NgbModule,
    IconModule
  ],
  exports: [ToastComponent]
})
export class AppCommonModule { }
