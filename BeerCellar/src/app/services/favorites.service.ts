import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
// import { Router } from '@angular/router'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private httpClient: HttpClient) { }

  private token = sessionStorage.getItem("token"); 

  private apiUrl: string = 'https://sandbox-api.brewerydb.com/v2/beer/random/?key=0da93aab15976e9da7c3265b3d4f486f'; 
  private url: string = 'http:/localhost:8080/BeerBackend/user/favorites'; 

  // getBeerId(): Observable<any> {
  //   return this.httpClient.get(); 
  // }

  // addFavoriteBeer(beerId: number): Observable<any> {
  //   return this.httpClient.get();
  // }
}




//cwc 22 Dec
