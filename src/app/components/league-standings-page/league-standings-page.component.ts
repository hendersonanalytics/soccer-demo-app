import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueLimitedInfo } from 'src/app/modules/players/models/football-api-players-response-info.interface';

import { StandingsFacade } from 'src/app/modules/standings/facades/standings.facade';
import { StandingsResponseRankingInfo } from 'src/app/modules/standings/models/football-api-standings-response-info.interface';

@Component({
  selector: 'app-league-standings-page',
  templateUrl: './league-standings-page.component.html',
  styleUrls: ['./league-standings-page.component.scss'],
})
export class LeagueStandingsPageComponent implements OnInit {

  standings$: Observable<StandingsResponseRankingInfo[]>;
  league$: Observable<LeagueLimitedInfo>;

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

  constructor(private standingsFacade: StandingsFacade) { }

  ngOnInit() {
    this.standings$ = this.standingsFacade.standings$;
    this.league$ = this.standingsFacade.league$;
  }
}
