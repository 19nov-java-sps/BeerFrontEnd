import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomBeer } from '../Models/random-beer.model';

@Injectable({
  providedIn: 'root'
})
export class RandomBeerService {

  url: string = 'https://sandbox-api.brewerydb.com/v2/beer/random/?key=0da93aab15976e9da7c3265b3d4f486f';
  // imageUrl: string = 'https://sandbox-api.brewerydb.com/v2/beers/?key=0da93aab15976e9da7c3265b3d4f486f'

  constructor(private http: HttpClient) { }

  getRandomBeers(): Observable<any> {
    return this.http.get<any>(this.url); 

  }

  // getRandomBeerImage(): Observable<any> {
  //   return this.http.get<any>(this.imageUrl);
  // }
 }
 