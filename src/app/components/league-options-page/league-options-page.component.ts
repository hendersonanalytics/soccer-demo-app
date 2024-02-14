import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';
import { StandingsFacade } from 'src/app/modules/standings/facades/standings.facade';
import { StandingsQueryParams } from 'src/app/modules/standings/models/standings-query-params.interface';

@Component({
  selector: 'app-league-options-page',
  templateUrl: './league-options-page.component.html',
  styleUrls: ['./league-options-page.component.scss'],
})
export class LeagueOptionsPageComponent implements OnInit {

  league$: Observable<FootballApiLeaguesResponseInfo>;
  season$: Observable<number>;

  constructor(
    private leagueFacade: LeagueFacade,
    private standingsFacade: StandingsFacade,
  ) { }

  ngOnInit() {
    this.league$ = this.leagueFacade.selectedLeagueInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
  }

  onSelectStandings(queryParams: StandingsQueryParams): void {
    this.standingsFacade.fetchStandings(queryParams);
  }
}
