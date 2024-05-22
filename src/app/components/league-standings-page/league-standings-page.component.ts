import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { QUERY_PARAMS } from 'src/app/configs/query-params.enum';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { LeagueLimitedInfo } from 'src/app/modules/players/models/football-api-players-response-info.interface';

import { StandingsFacade } from 'src/app/modules/standings/facades/standings.facade';
import { StandingsResponseRankingInfo } from 'src/app/modules/standings/models/football-api-standings-response-info.interface';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';

@Component({
  selector: 'app-league-standings-page',
  templateUrl: './league-standings-page.component.html',
  styleUrls: ['./league-standings-page.component.scss'],
})
export class LeagueStandingsPageComponent implements OnInit, OnDestroy {

  standings$: Observable<StandingsResponseRankingInfo[]>;
  league$: Observable<LeagueLimitedInfo>;
  selectedCountry$: Observable<string>;

  private queryParamsSubscription: Subscription;

  readonly columns  = [
    { name: ' ' },
    { name: ' ' },
    { name: 'GP' },
    { name: 'W' },
    { name: 'D' },
    { name: 'L' },
    { name: 'F' },
    { name: 'A' },
    { name: 'GD' },
    { name: 'P' }
  ];

  constructor(
    private standingsFacade: StandingsFacade,
    private teamFacade: TeamFacade,
    private leagueFacade: LeagueFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.standings$ = this.standingsFacade.standings$;
    this.league$ = this.standingsFacade.league$;
    this.selectedCountry$ = this.leagueFacade.selectedCountry$;

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

      if (leagueId && season) {
        this.standingsFacade.fetchStandings({leagueId, season});
      }
    });
  }

  onClickTeam(teamId: number): void {
    this.teamFacade.selectTeam(teamId);
    this.router.navigate(['/team-details']);
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
  }
}
