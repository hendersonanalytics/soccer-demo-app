/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

import { AppRoutingModule } from '../app-routing.module';
import { LeagueFacade } from '../modules/leagues/facades/league.facade';
import { TEST_LEAGUES_RESPONSE } from '../support/data/test-leagues-response';
import { TEST_SEASONS_RESPONSE } from '../support/data/test-seasons-response';
import { getSelectorString } from '../support/utils/get-selector-string';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let el: DebugElement;
  let leagueFacade: LeagueFacade;

  const COUNTRIES = [
    'Argentina','Belarus','Belgium','Brazil','Bulgaria','China','Costa-Rica','Denmark',
    'England','France','Germany','Iceland','Italy','Japan','Netherlands','Norway',
    'Poland','Portugal','Scotland','Spain','Sweden','Wales','World'
  ];

  const leagueFacadeSpy = jasmine.createSpyObj(
    'LeagueFacade',
    ['fetchSeasons','selectSeason', 'selectLeague', 'selectCountry']
  );

  function setDefaultObservableValues() {
    leagueFacade.seasons$ = of(TEST_SEASONS_RESPONSE.response);
    leagueFacade.countries$ = of(COUNTRIES);
    leagueFacade.leagues$ = of(TEST_LEAGUES_RESPONSE.response.slice(0,20));
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        BrowserModule,
        AppRoutingModule
      ],
      providers: [
        { provide: LeagueFacade, useValue: leagueFacadeSpy }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomePage);
      leagueFacade = TestBed.inject(LeagueFacade);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      setDefaultObservableValues();
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    leagueFacadeSpy.fetchSeasons.calls.reset();
    leagueFacadeSpy.selectSeason.calls.reset();
    leagueFacadeSpy.selectLeague.calls.reset();
    leagueFacadeSpy.selectCountry.calls.reset();
  });

  // TODO: add more tests to capture reactive behavior on this page
  it('should call the correct method from ngOnInit', () => {
    expect(leagueFacadeSpy.fetchSeasons).toHaveBeenCalledOnceWith();
  });

  it('option lists should have the expected number of elements', () => {
    const leagueOptionElements = el.queryAll(By.css(getSelectorString('league-option-element')));
    expect(leagueOptionElements.length).toBe(20);
    const countryOptionElements = el.queryAll(By.css(getSelectorString('country-option-element')));
    expect(countryOptionElements.length).toBe(COUNTRIES.length);
    const seasonOptionElements = el.queryAll(By.css(getSelectorString('season-option-element')));
    expect(seasonOptionElements.length).toBe(TEST_SEASONS_RESPONSE.response.length);
  });

  it('clicking on a league should call the proper facade method', () => {
    const leagueOptionElement = el.query(By.css(getSelectorString('league-option-element')));
    leagueOptionElement.nativeElement.click();
    expect(leagueFacadeSpy.selectLeague).toHaveBeenCalledOnceWith(1);
  });
});
