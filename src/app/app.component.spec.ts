import { TestBed, async } from '@angular/core/testing';

import { By }              from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tour of Heroes'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));

  it(`should have heroes link`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const link = fixture.debugElement.query(By.css("a#heroesLink"));
    expect(link.nativeElement.textContent).toEqual('Heroes');
  }));

  it(`should have dashboard link`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const link = fixture.debugElement.query(By.css("a#dashboardLink"));
    expect(link.nativeElement.textContent).toEqual('Dashboard');
  }));
});
