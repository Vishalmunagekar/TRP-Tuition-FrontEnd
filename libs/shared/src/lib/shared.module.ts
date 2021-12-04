import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';
import { IconModule } from './icon/icon.module';

@NgModule({
  imports: [CommonModule, NgbModule , IconModule ],
  declarations: [
    ToastComponent,
  ],
  exports: [
    ToastComponent,
    NgbModule,
    IconModule
  ],
})
export class SharedModule {}
