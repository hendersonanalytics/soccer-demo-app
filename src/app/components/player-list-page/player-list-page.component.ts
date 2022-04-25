import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';
import { FootballApiTeamsResponseInfo } from 'src/app/modules/teams/models/football-api-teams-response-info.interface';
import { PlayerFacade } from '../../modules/players/facades/player.facade';
import { FootballApiPlayersResponseInfo } from '../../modules/players/models/football-api-players-response-info.interface';

@Component({
  selector: 'app-player-list-page',
  templateUrl: './player-list-page.component.html',
  styleUrls: ['./player-list-page.component.scss'],
})
export class PlayerListPageComponent implements OnInit {
  players$: Observable<FootballApiPlayersResponseInfo[]>;
  morePlayersAreAvailable$: Observable<boolean>;
  team$: Observable<FootballApiTeamsResponseInfo>;
  season$: Observable<number>;
  league$: Observable<FootballApiLeaguesResponseInfo>;

  constructor(
    private playerFacade: PlayerFacade,
    private teamFacade: TeamFacade,
    private leagueFacade: LeagueFacade
  ) { }

  ngOnInit() {
    this.players$ = this.playerFacade.players$;
    this.morePlayersAreAvailable$ = this.playerFacade.morePlayersAreAvailable$;
    this.team$ = this.teamFacade.selectedTeamInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
    this.league$ = this.leagueFacade.selectedLeagueInfo$;
  }

  onClickShowMore() {
    this.playerFacade.appendPlayers();
  }
}
