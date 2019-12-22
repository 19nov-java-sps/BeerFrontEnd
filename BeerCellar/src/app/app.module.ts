import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

=======
>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BeersComponent } from './beers/beers.component';
//import { BeerDetailComponent } from './beer-detail/beer-detail.component';
//import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { BeerComponent } from './beer/beer.component';
=======
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { RandomBeerComponent } from './random-beer/random-beer.component'; 
import { RandomBeerService } from './services/random-beer.service';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    AccountComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [ LoginService ],
=======
    HomeComponent,
    AboutComponent,
    NavComponent,
    RandomBeerComponent,
    AccountComponent,
    LoginComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RandomBeerService, LoginService],
>>>>>>> 2c17f75fd32d63be5ba1ea33131c01172145eaed
  bootstrap: [AppComponent]
})
export class AppModule { }
