import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BEERS } from '../mock-beers'
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})

export class BeersComponent implements OnInit {

  beers = BEERS; 
  selectedBeer: Beer; 

  constructor() { }

  ngOnInit() {
  }

  onSelect(beer: Beer): void {
    this.selectedBeer = beer; 
  }

  // getBeers(): void {
  //   this.beerService.getBeers()
  //       .subscribe(beers => this.beers = beers); 
  // }

}

