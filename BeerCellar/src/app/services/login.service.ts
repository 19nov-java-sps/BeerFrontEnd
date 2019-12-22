import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private url: string = "http://3.90.228.40:8080/BeerBackend/login"; 
  private body: string; 

  private authorization: string;

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"}), 
    observe: "response" as "body"
  }; 

  authenticate(username: string, password: string): void {
    this.body = `username=${username}&password=${password}`; 
    this.httpClient.post(`${this.url}`, this.body, this.httpOptions).subscribe(
      response => {
        this.authorization = (response["headers"].get("Authorization")); 
        sessionStorage.setItem("token", this.authorization); 
        this.router.navigate(["NavBar"]);
      }
    );
  }

}
