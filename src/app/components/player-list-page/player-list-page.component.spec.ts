/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';
import { TEST_LEAGUES_RESPONSE } from 'src/app/support/data/test-leagues-response';
import { TEST_PLAYERS_RESPONSE } from 'src/app/support/data/test-players-response';
import { TEST_TEAMS_RESPONSE } from 'src/app/support/data/test-teams-response';
import { getSelectorString } from 'src/app/support/utils/get-selector-string';
import { PlayerFacade } from '../../modules/players/facades/player.facade';
import { PlayerListPageComponent } from './player-list-page.component';

describe('PlayerListPageComponent', () => {
  let component: PlayerListPageComponent;
  let fixture: ComponentFixture<PlayerListPageComponent>;
  let el: DebugElement;
  let playerFacade: PlayerFacade;
  let teamFacade: TeamFacade;
  let leagueFacade: LeagueFacade;

  const playerFacadeSpy = jasmine.createSpyObj('PlayerFacade', ['appendPlayers']);
  const teamFacadeMock = {
    selectedTeam$: of(42)
  };

  const leagueFacadeMock = {
    selectedSeason$: of(2021),
    selectedLeagueInfo$: of(TEST_LEAGUES_RESPONSE.response[0]),
    selectedLeague$: of(39)
  };

  function setDefaultObservableValues() {
    teamFacade.selectedTeamInfo$ = of(TEST_TEAMS_RESPONSE.response[0]);
    teamFacade.selectedTeam$ = of(42);
    playerFacade.players$ = of(TEST_PLAYERS_RESPONSE.response);
    playerFacade.morePlayersAreAvailable$ = of(true);
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListPageComponent ],
      imports: [
        IonicModule.forRoot(),
        BrowserModule,
        AppRoutingModule
      ],
      providers: [
        { provide: PlayerFacade, useValue: playerFacadeSpy },
        { provide: TeamFacade, useValue: teamFacadeMock },
        { provide: LeagueFacade, useValue: leagueFacadeMock },
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PlayerListPageComponent);
      teamFacade = TestBed.inject(TeamFacade);
      playerFacade = TestBed.inject(PlayerFacade);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      setDefaultObservableValues();
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    playerFacadeSpy.appendPlayers.calls.reset();
  });

  // TODO: add test for show more button visibility
  it('should have the expected team info', () => {
    const teamNameElement = el.query(By.css(getSelectorString('label-team-name')));
    expect(teamNameElement.nativeElement.textContent.toLowerCase()).toContain('manchester united');
  });

  it('should render the expected number of players', () => {
    const playerListItems = el.queryAll(By.css(getSelectorString('player-list-item')));
    expect(playerListItems.length).toBe(20);
  });

  it('clicking show more button should call the proper method', () => {
    const showMoreElement = el.query(By.css(getSelectorString('show-more-btn')));
    showMoreElement.nativeElement.click();
    expect(playerFacadeSpy.appendPlayers).toHaveBeenCalledOnceWith();
  });
});
