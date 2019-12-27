import { Component, OnInit } from '@angular/core';
import { RandomBeer } from '../models/random-beer.model' 
import { RandomBeerService } from '../services/random-beer.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {

  retrievedBeer: RandomBeer ;

    constructor(private randombeer: RandomBeerService) { }

  ngOnInit() {

    //retrievedBeer = this.http.get<RandomBeer>()
    // this.randombeer.getRandomBeers(); 
    this.getBeer()

  }

  getBeer() {
    this.randombeer.getRandomBeers().subscribe(response=> this.retrievedBeer=response["data"]); 
  }

  // getBeerImage() {
  //   this.randombeer.getRandomBeerImage().subscribe(response=> this.retrievedBeer=response["labels"]);
  // }


}
