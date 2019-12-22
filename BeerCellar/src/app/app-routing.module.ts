import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { BeerComponent } from './beer/beer.component';


const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "beer", component: BeerComponent}
=======
// import { HomeComponent } from './home/home.component'; 
// import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes =
 [
  { path: '', redirectTo: '/login', pathMatch: 'full'}, 
 // { path: 'home', component: HomeComponent }, 
  // { path: 'about', component: AboutComponent },
  {path: "login", component: LoginComponent},
  {path: "home", component: NavComponent},
  {path: "logout", component: AccountComponent},
  {path: "random-beer", component: RandomBeerComponent},
  {path: "favorites", component:FavoritesComponent}


>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
