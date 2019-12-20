import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor() { }

  //hacky hard-coding to start out with
  authenticate(username: string, password: string) {
    if (username === 'username' && password === 'password') {
      sessionStorage.setItem('username', username); 
      return true; 
    }
    return false; 
  }

  isLoggedIn(): boolean {
    let user = sessionStorage.getItem('username'); 
    if (user === null) {
      return false; 
    }
    return true; 
  }

  logOut() {
    sessionStorage.removeItem('username'); 
  }
}
