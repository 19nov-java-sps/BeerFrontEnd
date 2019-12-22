import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(private router: Router) { }

  private token = sessionStorage.getItem("token"); 

  ngOnInit() {
    if (this.token) {
      console.log("using token ", this.token); 
    } else {
      this.router.navigate(["login"]); 
      console.log("invalid token");
    }
  }

  clear() {
    sessionStorage.clear(); 
    this.router.navigate(["login"]); 
  }
}
