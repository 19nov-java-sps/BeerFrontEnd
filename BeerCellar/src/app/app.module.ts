import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
