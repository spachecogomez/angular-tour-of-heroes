import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../heroes.component';

@Injectable()
export class HeroService {
	private heroesUrl = 'http://localhost:8080/api/heroes';  // URL to web api

	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
		.toPromise()
		.then(response => response.json() as Hero[])
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	getHero(id: number): Promise<Hero> {
		const url = `http://localhost:8080/api/heroes/${id}`;
		return this.http.get(url)
		.toPromise()
		.then(response => response.json() as Hero)
		.catch(this.handleError);
	}
}