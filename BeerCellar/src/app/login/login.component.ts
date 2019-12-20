import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ''; 
  password: string = ''; 
  invalidLogin: boolean = false; 
  constructor(private router: Router, private loginService: AuthentificationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)) {
      this.router.navigate(['']); 
    } else {
      this.invalidLogin = true; 
    }
  }

}
