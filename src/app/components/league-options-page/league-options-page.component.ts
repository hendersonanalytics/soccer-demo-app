import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { QUERY_PARAMS } from 'src/app/configs/query-params.enum';

import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';
import { StandingsFacade } from 'src/app/modules/standings/facades/standings.facade';
import { StandingsQueryParams } from 'src/app/modules/standings/models/standings-query-params.interface';

@Component({
  selector: 'app-league-options-page',
  templateUrl: './league-options-page.component.html',
  styleUrls: ['./league-options-page.component.scss'],
})
export class LeagueOptionsPageComponent implements OnInit, OnDestroy {

  league$: Observable<FootballApiLeaguesResponseInfo>;
  season$: Observable<number>;
  selectedCountry$: Observable<string>;
  queryParamsSubscription: Subscription;

  constructor(
    private leagueFacade: LeagueFacade,
    private standingsFacade: StandingsFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe((params) => {
      const leagueId = params[QUERY_PARAMS.LEAGUE_ID];
      const season = params[QUERY_PARAMS.SEASON];
      const country = params[QUERY_PARAMS.COUNTRY];
      if (country) {
        this.leagueFacade.selectCountry(country);
      }
      if (season) {
        this.leagueFacade.selectSeasonWithoutAutoFetch(parseInt(season, 10));
      }
      if (leagueId) {
        this.leagueFacade.selectLeagueWithoutAutoFetch(parseInt(leagueId, 10));
      }
    });

    this.league$ = this.leagueFacade.selectedLeagueInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
    this.selectedCountry$ = this.leagueFacade.selectedCountry$;
  }

  onSelectStandings(queryParams: StandingsQueryParams): void {
    this.standingsFacade.fetchStandings(queryParams);
    this.router.navigate(['/standings']);
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
  }
}
