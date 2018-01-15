import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	styleUrls: ['./app.component.css'],
	template: `
	<h1>{{title}}</h1>
	<nav>
	<a id="heroesLink" routerLink="/heroes">Heroes</a>
	<a id="dashboardLink" routerLink="/dashboard">Dashboard</a>
	</nav>
	<router-outlet></router-outlet>
	`
})
export class AppComponent {
	title = 'Tour of Heroes';
}