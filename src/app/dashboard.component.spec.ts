import { TestBed, async , inject } from '@angular/core/testing';

import { By }              from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HeroService } from './services/hero.service';

import { Hero } from './heroes.component';

import { HttpModule, Http, ConnectionBackend , RequestOptions, RequestMethod , XHRBackend, ResponseOptions} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('DashboardComponent', () => {

	var heroService: HeroService;
	var requestOptions : RequestOptions;
 var mockedService = {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve([{id:1 , name: "Mock Hero 1"},{id:2,name:"MockHero2"}]);
  },
  getHero(id: number): Promise<Hero> {
   return Promise.resolve({id:1 , name: "MockHero1"});
 }

};

beforeEach(async(() => {
  requestOptions = new RequestOptions({method: RequestMethod.Get});
  TestBed.configureTestingModule({
    imports: [HttpModule],
    declarations: [
    DashboardComponent
    ],
    providers: [{provide: HeroService , useValue: mockedService}, Http, ConnectionBackend, {provide: RequestOptions, useValue: requestOptions}],
    schemas:      [ NO_ERRORS_SCHEMA ]
  }).compileComponents();

}));

it(`should create the app`, async(() => {
 const fixture = TestBed.createComponent(DashboardComponent);
 const app = fixture.debugElement.componentInstance;
 expect(app).toBeTruthy();
}));

it(`should render mocked heroes`, async(() => {
 const fixture = TestBed.createComponent(DashboardComponent);
 const link = fixture.debugElement.query(By.css("div#hero1"));
 console.log(link);
}));

});