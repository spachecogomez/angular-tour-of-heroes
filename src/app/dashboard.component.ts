import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes.component';
import { HeroService } from './services/hero.service'
import { Http } from '@angular/http';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	providers: [HeroService,Http]
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1, 5));
	}

}