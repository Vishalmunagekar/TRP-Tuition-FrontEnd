import { Component, OnInit } from '@angular/core';
import { AppSessionStorageService } from '../../auth/services/app-session-storage.service';
import { User } from '../../auth/models/User';

@Component({
  selector: 'erp-tuition-frontend-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user!:User;
  constructor( private sessionStorageService : AppSessionStorageService) { }

  ngOnInit(): void {
    this.user = this.sessionStorageService.retrieve("user");
    console.log(this.user);
  }

}
