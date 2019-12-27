import { Component, OnInit } from '@angular/core';
import { RandomBeer } from '../models/random-beer.model';
// import { HttpClient } from '@angular/common/http';
import { RandomBeerService } from '../services/random-beer.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedBeers: RandomBeer; 
  paleAleButton : boolean = false

  constructor(private searchBeer: RandomBeerService) { }

  ngOnInit() {
   this.getPaleAle(); 
  }

  getLager() {
    this.searchBeer.searchforLager().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }

  getPaleAle() {
    this.searchBeer.searchforPaleAle().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }
  getAmberAle() {
    this.searchBeer.searchforAmberAle().subscribe(response=> this.searchedBeers=response["data"]); 
  }
  getBrownAle() {
    this.searchBeer.searchforBrownAle().subscribe(response=> this.searchedBeers=response["data"]); 
  }
  getPorter() {
    this.searchBeer.searchforPorter().subscribe(response=> this.searchedBeers=response["data"]); 
  }
  getStout() {
    this.searchBeer.searchforStout().subscribe(response=> this.searchedBeers=response["data"]); 
  }

  press() {
    this.paleAleButton = !this.paleAleButton
    // if (this.paleAleButton) {
      // this.getPaleAle; 
    // }
  }

}
