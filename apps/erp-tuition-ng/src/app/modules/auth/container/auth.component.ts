import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-tuition-frontend-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  ngOnInit(): void {
    console.log("AuthComponent works...");
  }

}
