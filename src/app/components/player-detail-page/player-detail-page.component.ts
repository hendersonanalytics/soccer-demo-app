import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';
import { FootballApiTeamsResponseInfo } from 'src/app/modules/teams/models/football-api-teams-response-info.interface';
import { PlayerFacade } from '../../modules/players/facades/player.facade';
import { FootballApiPlayerStatsInfo, FootballApiPlayersResponseInfo } from '../../modules/players/models/football-api-players-response-info.interface';
import { PlayerResponsePlayerInfo } from 'src/app/modules/players/models/player-response-player-info.interface';
import { ActivatedRoute } from '@angular/router';
import { QUERY_PARAMS } from 'src/app/configs/query-params.enum';

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
  queryParamsSubscription: Subscription;

  constructor(
    private playerFacade: PlayerFacade,
    private teamFacade: TeamFacade,
    private leagueFacade: LeagueFacade,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe((params) => {
      const leagueId = parseInt(params[QUERY_PARAMS.LEAGUE_ID], 10);
      const season = parseInt(params[QUERY_PARAMS.SEASON], 10);
      const country = params[QUERY_PARAMS.COUNTRY];
      const teamId = parseInt(params[QUERY_PARAMS.TEAM_ID], 10);
      const playerId = parseInt(params[QUERY_PARAMS.PLAYER_ID], 10);
      if (country) {
        this.leagueFacade.selectCountry(country);
      }
      if (season) {
        this.leagueFacade.selectSeasonWithoutAutoFetch(season);
      }
      if (leagueId) {
        this.leagueFacade.selectLeagueWithoutAutoFetch(leagueId);
      }
      if (teamId) {
        this.teamFacade.fetchTeams({ leagueId, season, countryName: country, teamId});
        this.teamFacade.selectTeam(teamId);
      }
      if (playerId) {
        this.playerFacade.selectPlayer(playerId);
      }
    });

    this.selectedPlayerAttributes$ = this.playerFacade.selectedPlayerAttributes$;
    this.selectedPlayerStats$ = this.playerFacade.selectedPlayerStats$;
    this.team$ = this.teamFacade.selectedTeamInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
    this.league$ = this.leagueFacade.selectedLeagueInfo$;
    this.isGoalkeeper$ = this.playerFacade.isGoalkeeper$;
  }
}
