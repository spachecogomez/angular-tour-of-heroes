import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
  AppComponent,
  HeroDetailComponent,
  HeroesComponent,
  DashboardComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  //InMemoryWebApiModule.forRoot(InMemoryDataService),
  AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
