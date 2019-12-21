import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

  private token = sessionStorage.getItem("token"); 

  ngOnInit() {
    if (!this.token) {
      this.router.navigate(["login"]); 
    }
  }

  clearSession(): void {
    sessionStorage.clear(); 
    this.router.navigate(["login"]); 
  }

}
