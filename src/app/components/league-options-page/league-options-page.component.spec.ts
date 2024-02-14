import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeagueOptionsPageComponent } from './league-options-page.component';
import { TEST_LEAGUES_RESPONSE } from 'src/app/support/data/test-leagues-response';
import { of } from 'rxjs';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { StandingsFacade } from 'src/app/modules/standings/facades/standings.facade';
import { DebugElement } from '@angular/core';
import { getSelectorString } from 'src/app/support/utils/get-selector-string';

describe('LeagueOptionsPageComponent', () => {
  let component: LeagueOptionsPageComponent;
  let fixture: ComponentFixture<LeagueOptionsPageComponent>;
  let standingsFacade: jasmine.SpyObj<StandingsFacade>;
  let el: DebugElement;

  const leagueFacadeMock = {
    selectedSeason$: of(2021),
    selectedLeagueInfo$: of(TEST_LEAGUES_RESPONSE.response[0]),
    selectedLeague$: of(39),
  };

  beforeEach(waitForAsync(() => {
    standingsFacade = jasmine.createSpyObj(
      'StandingsFacade',
      ['fetchStandings']
    );

    TestBed.configureTestingModule({
      declarations: [ LeagueOptionsPageComponent ],
      imports: [
        IonicModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
      ],
      providers: [
        { provide: LeagueFacade, useValue: leagueFacadeMock },
        { provide: StandingsFacade, useValue: standingsFacade },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueOptionsPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  describe('onSelectStandings', () => {
    it('should call fetchStandings', () => {
      const queryParams = { season: 2021, leagueId: 39 };
      component.onSelectStandings(queryParams);
      expect(standingsFacade.fetchStandings).toHaveBeenCalledWith(queryParams);
    });
  });

  describe('view tests', () => {

    it('clicking on view standings should call the expected method with the expected args', () => {
      spyOn(component, 'onSelectStandings');
      const viewStandingsElement = el.query(By.css(getSelectorString('label-view-standings')));
      viewStandingsElement.nativeElement.click();

      fixture.detectChanges();

      expect(component.onSelectStandings).toHaveBeenCalledOnceWith({
        season: 2021,
        leagueId: 1
      });
    });
  });
});
