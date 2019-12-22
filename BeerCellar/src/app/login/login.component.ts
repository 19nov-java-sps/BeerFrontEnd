import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
=======

>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  requestLogin(username: string, password: string):void {
    this.loginService.authenticate(username, password); 
  }

}
