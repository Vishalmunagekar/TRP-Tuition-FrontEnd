import { Component } from '@angular/core';
import { Admin } from '@erp-tuition-frontend/data-types'
@Component({
  selector: 'erp-tuition-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'erp-tuition-ng';
  user:Admin|any;
}
