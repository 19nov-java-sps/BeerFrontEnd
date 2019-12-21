import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private url: string = "http://localhost:8080/BeerBackEnd/login"; 
  private body: string; 

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"}), 
    observe: "response" as "body"
  }; 

  private auth: string;

  authenticate(username: string, password: string): void {
    this.body = `username=${username} & password=${password}`; 
    this.httpClient.post(`${this.url}`, this.body, this.httpOptions).subscribe(
      response => {
        this.auth = (response["headers"].get("Authorization")); 
        sessionStorage.setItem("token", this.auth); 
        this.router.navigate([]);
      }
    );
  }

}
