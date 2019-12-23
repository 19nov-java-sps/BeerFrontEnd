import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from '../models/favorites.model'; 
  import { FavoritesService } from '../services/favorites.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'], 
  providers: []
})
export class FavoritesComponent implements OnInit {

  constructor(private favorite: FavoritesService, private router: Router) { }

  private token = sessionStorage.getItem("token"); 
  private favoriteBeers: Favorite[]; 

  ngOnInit() {
    // if (token && ) {
    //   this.addBeer(beer); 
    // }
  }

  // addBeer(beer: RandomBeer): void {
  //   this.favoriteBeers.push(beer); 
  // }

  clear() {
    sessionStorage.clear();  
    this.router.navigate([]); 
  }

}
