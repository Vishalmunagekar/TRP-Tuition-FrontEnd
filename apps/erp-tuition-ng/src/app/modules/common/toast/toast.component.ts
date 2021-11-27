import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'erp-tuition-frontend-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  isTemplate(toast: { textOrTpl: any; }) { return toast.textOrTpl instanceof TemplateRef; }

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
    console.log("ToastComponent...")
  }

}
