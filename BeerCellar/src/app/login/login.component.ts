import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ServiceResponse } from '../model/service-response'; 
import { CookieService } from 'ngx-cookie-service';
import { Post } from '../model/post'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User; 
  loginForm: FormGroup; 
  loginError: boolean = false; 
  internalServerError: boolean = false; 
  testData: User = new UserService(); 

  constructor(private userService: UserService, private formBuilder: FormBuilder, 
              private router: Router, private cookieService: CookieService) {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(): void {
    this.userService.login(this.loginForm.value).subscribe(
      res => {
        this.serviceResponse = res; 
        if (this.serviceResponse.responseCode != "OK") {
          this.loginError = true; 
        }
        else {
          this.userService.setLoggedUser(this.serviceResponse.responseObject); 
          this.router.navigateByUrl('/');
        }
      }
    );
  }

}
