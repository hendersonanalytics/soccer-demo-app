import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerDetailPageComponent } from './player-detail-page.component';
import { PlayerFacade } from 'src/app/modules/players/facades/player.facade';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { of } from 'rxjs';
import { TEST_LEAGUES_RESPONSE } from 'src/app/support/data/test-leagues-response';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PlayerDetailPageComponent', () => {
  let component: PlayerDetailPageComponent;
  let fixture: ComponentFixture<PlayerDetailPageComponent>;
  let playerFacade: jasmine.SpyObj<PlayerFacade>;
  let teamFacadeMock: TeamFacade;
  let leagueFacadeMock: LeagueFacade;

  beforeEach(waitForAsync(() => {

    playerFacade = jasmine.createSpyObj('PlayerFacade', ['appendPlayers', 'selectPlayer']);

    teamFacadeMock = {
      selectedTeam$: of(42)
    } as TeamFacade;

    leagueFacadeMock = {
      selectedSeason$: of(2021),
      selectedLeagueInfo$: of(TEST_LEAGUES_RESPONSE.response[0]),
      selectedLeague$: of(39)
    } as LeagueFacade;

    TestBed.configureTestingModule({
      declarations: [ PlayerDetailPageComponent ],
      imports: [
        IonicModule.forRoot(),
        BrowserModule,
        AppRoutingModule
      ],
      providers: [
        { provide: PlayerFacade, useValue: playerFacade },
        { provide: TeamFacade, useValue: teamFacadeMock },
        { provide: LeagueFacade, useValue: leagueFacadeMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
