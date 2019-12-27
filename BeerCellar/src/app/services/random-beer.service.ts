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
  searchLager: string = 'https://sandbox-api.brewerydb.com/v2/search?q=lager&type=beer&key=0da93aab15976e9da7c3265b3d4f486f';
  searchPaleAle: string = 'https://sandbox-api.brewerydb.com/v2/search?q=pale+ale&type=beer&key=0da93aab15976e9da7c3265b3d4f486f';
  searchAmberAle: string = 'https://sandbox-api.brewerydb.com/v2/search?q=amber&type=beer&key=0da93aab15976e9da7c3265b3d4f486f';
  searchBrownAle: string = 'https://sandbox-api.brewerydb.com/v2/search?q=brown&type=beer&key=0da93aab15976e9da7c3265b3d4f486f';
  searchStout: string = 'https://sandbox-api.brewerydb.com/v2/search?q=stout&type=beer&key=0da93aab15976e9da7c3265b3d4f486f';
  searchPorter: string = 'https://sandbox-api.brewerydb.com/v2/search?q=porter&type=beer&key=0da93aab15976e9da7c3265b3d4f486f';



  constructor(private http: HttpClient) { }

  getRandomBeers(): Observable<any> {
    return this.http.get<any>(this.url); 

  }

  searchforLager(): Observable<any> {
    return this.http.get<any>(this.searchLager); 
  }
  searchforPaleAle(): Observable<any> {
    return this.http.get<any>(this.searchPaleAle); 
  }
  searchforAmberAle(): Observable<any> {
    return this.http.get<any>(this.searchAmberAle); 
  }
  searchforBrownAle(): Observable<any> {
    return this.http.get<any>(this.searchBrownAle); 
  }
  searchforPorter(): Observable<any> {
    return this.http.get<any>(this.searchPorter); 
  }
  searchforStout(): Observable<any> {
    return this.http.get<any>(this.searchStout); 
  }

  // getRandomBeerImage(): Observable<any> {
  //   return this.http.get<any>(this.imageUrl);
  // }
 }
 