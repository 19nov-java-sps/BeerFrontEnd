import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = 'https://sandbox-api.brewerydb.com/v2/beers/?key=0da93aab15976e9da7c3265b3d4f486f';
  constructor( private http: HttpClient) { }

  searchedBeers(): Observable<any> {
    return this.http.get<any>(this.url); 
  }
}
