import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';

import { TeamFacade } from '../../modules/teams/facades/team.facade';
import { FootballApiTeamsResponseInfo } from '../../modules/teams/models/football-api-teams-response-info.interface';
import { ActivatedRoute } from '@angular/router';
import { QUERY_PARAMS } from 'src/app/configs/query-params.enum';

@Component({
  selector: 'app-team-list-page',
  templateUrl: './team-list-page.component.html',
  styleUrls: ['./team-list-page.component.scss'],
})
export class TeamListPageComponent implements OnInit {
  teams$: Observable<FootballApiTeamsResponseInfo[]>;
  isLoading$: Observable<boolean>;
  hasError$: Observable<boolean>;
  league$: Observable<FootballApiLeaguesResponseInfo>;
  season$: Observable<number>;
  selectedCountry$: Observable<string>;
  queryParamsSubscription: Subscription;

  constructor(
    private teamFacade: TeamFacade,
    private leagueFacade: LeagueFacade,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe((params) => {
      const leagueId = parseInt(params[QUERY_PARAMS.LEAGUE_ID], 10);
      const season = parseInt(params[QUERY_PARAMS.SEASON], 10);
      const country = params[QUERY_PARAMS.COUNTRY];
      if (country) {
        this.leagueFacade.selectCountry(country);
      }
      if (season) {
        this.leagueFacade.selectSeasonWithoutAutoFetch(season);
      }
      if (leagueId) {
        this.leagueFacade.selectLeagueWithoutAutoFetch(leagueId);
      }

      // TODO - optimize this; don't need to fetch teams if they are already loaded for that season
      // and league
      this.teamFacade.fetchTeams({ leagueId, season, countryName: country })
    });

    this.teams$ = this.teamFacade.teams$;
    this.isLoading$ = this.teamFacade.isLoading$;
    this.hasError$ = this.teamFacade.hasError$;
    this.league$ = this.leagueFacade.selectedLeagueInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
    this.selectedCountry$ = this.leagueFacade.selectedCountry$;
  }

  onSelectTeam(teamId: number): void {
    this.teamFacade.selectTeam(teamId);
  }
}
