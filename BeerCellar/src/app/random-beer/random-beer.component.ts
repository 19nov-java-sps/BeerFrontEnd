import { Component, OnInit } from '@angular/core';
import { RandomBeer } from '../random-beer.model' 
import { RandomBeerService } from '../random-beer.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {

  listRandomBeer: RandomBeer[] = [];




    constructor(private randombeer: RandomBeerService) { }

  ngOnInit() {
    this.randombeer.getRandomBeers()
      .subscribe(data =>
        {
        // let nameOfBeer = data.name
        // let descriptionOfBeer = data.style
        // this.listRandomBeer.push(data)
        // console.log(data)
        // this.listRandomBeer[0].name = data.name
        // this.listRandomBeer[0].description = data.style.description

          this.listRandomBeer.push(data);
        }
    );





  }

}
