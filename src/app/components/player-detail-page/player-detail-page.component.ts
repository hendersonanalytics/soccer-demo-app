import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';
import { FootballApiTeamsResponseInfo } from 'src/app/modules/teams/models/football-api-teams-response-info.interface';
import { PlayerFacade } from '../../modules/players/facades/player.facade';
import { FootballApiPlayerStatsInfo, FootballApiPlayersResponseInfo } from '../../modules/players/models/football-api-players-response-info.interface';
import { PlayerResponsePlayerInfo } from 'src/app/modules/players/models/player-response-player-info.interface';

@Component({
  selector: 'app-player-detail-page',
  templateUrl: './player-detail-page.component.html',
  styleUrls: ['./player-detail-page.component.scss'],
})
export class PlayerDetailPageComponent implements OnInit {
  players$: Observable<FootballApiPlayersResponseInfo[]>;
  team$: Observable<FootballApiTeamsResponseInfo>;
  season$: Observable<number>;
  league$: Observable<FootballApiLeaguesResponseInfo>;
  selectedPlayerStats$: Observable<FootballApiPlayerStatsInfo>;
  selectedPlayerAttributes$: Observable<PlayerResponsePlayerInfo>;
  isGoalkeeper$: Observable<boolean>;

  constructor(
    private playerFacade: PlayerFacade,
    private teamFacade: TeamFacade,
    private leagueFacade: LeagueFacade
  ) { }

  ngOnInit() {
    this.selectedPlayerAttributes$ = this.playerFacade.selectedPlayerAttributes$;
    this.selectedPlayerStats$ = this.playerFacade.selectedPlayerStats$;
    this.team$ = this.teamFacade.selectedTeamInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
    this.league$ = this.leagueFacade.selectedLeagueInfo$;
    this.isGoalkeeper$ = this.playerFacade.isGoalkeeper$;
  }
}
