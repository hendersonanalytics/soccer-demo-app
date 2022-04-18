/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { TEST_LEAGUES_RESPONSE } from 'src/app/support/data/test-leagues-response';
import { TEST_TEAMS_RESPONSE } from 'src/app/support/data/test-teams-response';
import { getSelectorString } from 'src/app/support/utils/get-selector-string';
import { TeamFacade } from '../../facades/team.facade';
import { TeamListPageComponent } from './team-list-page.component';

describe('TeamListPageComponent', () => {
  let component: TeamListPageComponent;
  let fixture: ComponentFixture<TeamListPageComponent>;
  let el: DebugElement;
  let teamFacade: TeamFacade;

  const teamFacadeSpy = jasmine.createSpyObj('TeamFacade', ['selectTeam']);

  const leagueFacadeMock = {
    selectedSeason$: of(2021),
    selectedLeagueInfo$: of(TEST_LEAGUES_RESPONSE.response[0])
  };

  function setDefaultObservableValues() {
    teamFacade.teams$ = of(TEST_TEAMS_RESPONSE.response);
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListPageComponent ],
      imports: [
        IonicModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
      ],
      providers: [
        { provide: TeamFacade, useValue: teamFacadeSpy },
        { provide: LeagueFacade, useValue: leagueFacadeMock }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TeamListPageComponent);
      teamFacade = TestBed.inject(TeamFacade);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      setDefaultObservableValues();
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    teamFacadeSpy.selectTeam.calls.reset();
  });

  it('should display the expected number of teams', () => {
    const teamListItems = el.queryAll(By.css(getSelectorString('team-list-item')));
    expect(teamListItems.length).toBe(20);
  });

  it('should call the proper method when a list item is clicked', () => {
    fixture.detectChanges();
    const listItem = el.query(By.css(getSelectorString('team-list-item')));
    listItem.nativeElement.click();
    expect(teamFacadeSpy.selectTeam).toHaveBeenCalledTimes(1);
    expect(teamFacadeSpy.selectTeam).toHaveBeenCalledWith(33);
  });
});
