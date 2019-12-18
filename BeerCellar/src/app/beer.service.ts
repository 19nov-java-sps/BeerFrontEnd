import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Beer } from './beer'; 
import { BEERS } from './mock-beers'; 
import { MessageService } from './message.service'; 


@Injectable({
  providedIn: 'root',
})
export class BeerService {

  constructor(private messageService: MessageService) { }

  getBeers(): Observable<Beer[]> {
    this.messageService.add('BeerService: fetched beer'); 
    return of(BEERS);
  }
}
