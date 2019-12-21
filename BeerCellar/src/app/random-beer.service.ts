import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomBeer } from './random-beer.model';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class RandomBeerService {

  private url: string = 'https://sandbox-api.brewerydb.com/v2/beer/random/?key=0da93aab15976e9da7c3265b3d4f486f';

  // public headers = new Headers()

  constructor(private http: HttpClient) { }




  getRandomBeers(): Observable<RandomBeer> {
    console.log("CORS error issue")
    let headers = { 'Access-Control-Allow-Origin':'*'}
    return this.http.get<RandomBeer>(this.url)
  }

 }
 