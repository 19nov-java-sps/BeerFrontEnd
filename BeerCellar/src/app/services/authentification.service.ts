import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
