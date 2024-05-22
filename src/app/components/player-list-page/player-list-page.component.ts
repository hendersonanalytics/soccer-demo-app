import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';
import { FootballApiTeamsResponseInfo } from 'src/app/modules/teams/models/football-api-teams-response-info.interface';
import { PlayerFacade } from '../../modules/players/facades/player.facade';
import { FootballApiPlayersResponseInfo } from '../../modules/players/models/football-api-players-response-info.interface';
import { QUERY_PARAMS } from 'src/app/configs/query-params.enum';

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
  selectedCountry$: Observable<string>;
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
    });

    this.players$ = this.playerFacade.players$;
    this.morePlayersAreAvailable$ = this.playerFacade.morePlayersAreAvailable$;
    this.team$ = this.teamFacade.selectedTeamInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
    this.league$ = this.leagueFacade.selectedLeagueInfo$;
    this.selectedCountry$ = this.leagueFacade.selectedCountry$;
  }

  onClickShowMore() {
    this.playerFacade.appendPlayers();
  }

  onSelectPlayer(playerId: number) {
    this.playerFacade.selectPlayer(playerId);
  }
}
