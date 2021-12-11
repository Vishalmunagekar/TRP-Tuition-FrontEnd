import { Component, OnInit } from '@angular/core';
import { AppSessionStorageService } from '@erp-tuition-frontend/shared';
import { User } from '../../auth/models/User';
import { AuthenticationResponse } from '../../auth/models/AuthenticationResponse';

@Component({
  selector: 'erp-tuition-frontend-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  response!:AuthenticationResponse;
  constructor( private sessionStorageService : AppSessionStorageService) { }

  ngOnInit(): void {
    this.response = this.sessionStorageService.retrieve("AuthenticationResponse");
    //console.log(this.user);
  }

}
