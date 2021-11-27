import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  private show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showSuccess(message:string) {
    this.show(message, { classname: 'bg-success text-light', delay : 50000, icon :'check-circle' });
  }
  showError(message:string){
    this.show(message, { classname: 'bg-danger text-light', delay : 50000, icon :'times-circle' });
  }
  showInfo(message:string){
    this.show(message, { classname: 'bg-primary text-light', delay : 50000, icon :'info-circle' });
  }
  showWarning(message:string){
    this.show(message, { classname: 'bg-warning text-light', delay : 50000, icon :'exclamation-circle' });
  };

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
