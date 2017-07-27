import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

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
  AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
