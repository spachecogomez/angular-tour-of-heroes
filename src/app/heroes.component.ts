import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './services/hero.service';
import {} from './app-routing.module';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';

    constructor(
        private heroService: HeroService,
        private router: Router
        ) { }

    ngOnInit(): void {
        this.getHeroes();
    }
    heroes ;

    selectedHero: Hero;


    getHeroes(): void {
        this.heroService.getHeroes().then( heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

export class Hero {

    id: number;
    name: string;
}