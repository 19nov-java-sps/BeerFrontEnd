import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { environment } from '@environments/environment'; 
import { User } from './models'; 

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>; 
  public currentUser: Observable<User>; 

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse()); 
    this.currentUser = this.currentUserSubject.asObservable(); 
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {username, password}).pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user)); 
        this.currentUserSubject.next(user); 
      }
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser'); 
    this.currentUserSubject.next(null); 
  }
}
