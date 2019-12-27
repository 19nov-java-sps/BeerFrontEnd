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
  lagerButton: boolean = false;
  paleAleButton : boolean = false
  amberButton : boolean = false
  brownButton : boolean = false
  porterButton : boolean = false
  stoutButton : boolean = false

  constructor(private searchBeer: RandomBeerService) { }

  ngOnInit() {
   this.getLager();
   this.getPaleAle(); 
   this.getAmberAle();
   this.getBrownAle();
   this.getPorter();
   this.getStout();
   
  }

  getLager() {
    this.searchBeer.searchforLager().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }

  getPaleAle() {
    this.searchBeer.searchforPaleAle().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }
  getAmberAle() {
    this.searchBeer.searchforAmberAle().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }
  getBrownAle() {
    this.searchBeer.searchforBrownAle().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }
  getPorter() {
    this.searchBeer.searchforPorter().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }
  getStout() {
    this.searchBeer.searchforStout().subscribe(response=> console.log(this.searchedBeers=response["data"])); 
  }

pressAle() {
    // this.lagerButton = !this.lagerButton
  this.paleAleButton = !this.paleAleButton

    // if (this.paleAleButton) {
      // this.getPaleAle; 
    // }
  }
pressLager(){
this.lagerButton = !this.lagerButton
}
pressAmber(){
  this.amberButton = !this.amberButton
}
pressBrown(){
  this.brownButton = !this.brownButton
}
pressPorter(){
  this.porterButton =!this.porterButton
}
pressStout(){
  this.stoutButton = !this.stoutButton
}

}
