import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
=======

>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }

<<<<<<< HEAD
  private url: string = "http://localhost:8080/BeerBackEnd/login"; 
=======
  private url: string = "http://3.90.228.40:8080/BeerBackend/login"; 
>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed
  private body: string; 

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"}), 
    observe: "response" as "body"
  }; 

<<<<<<< HEAD
  private auth: string;
=======
  private authorization: string;
>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed

  authenticate(username: string, password: string): void {
    this.body = `username=${username} & password=${password}`; 
    this.httpClient.post(`${this.url}`, this.body, this.httpOptions).subscribe(
      response => {
<<<<<<< HEAD
        this.auth = (response["headers"].get("Authorization")); 
        sessionStorage.setItem("token", this.auth); 
        this.router.navigate([]);
=======
        this.authorization = (response["headers"].get("Authorization")); 
        sessionStorage.setItem("token", this.authorization); 
        this.router.navigate(["NavBar"]);
>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed
      }
    );
  }

}
