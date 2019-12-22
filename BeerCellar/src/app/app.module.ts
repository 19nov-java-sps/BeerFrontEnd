import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BeersComponent } from './beers/beers.component';
//import { BeerDetailComponent } from './beer-detail/beer-detail.component';
//import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { BeerComponent } from './beer/beer.component';

@NgModule({
  declarations: [
    AppComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
