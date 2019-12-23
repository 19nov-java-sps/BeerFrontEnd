import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from ; 
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
    this.favorite.getBeerId().subscribe(
      (id) => {
        this.favoriteBeers.push(id);
      }
    );
  }

  clear() {
    sessionStorage.clear(); 
    this.router.navigate([]); 
  }

}
