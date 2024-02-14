import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StandingsFacade } from 'src/app/modules/standings/facades/standings.facade';
import { StandingsResponseRankingInfo } from 'src/app/modules/standings/models/football-api-standings-response-info.interface';

@Component({
  selector: 'app-league-standings-page',
  templateUrl: './league-standings-page.component.html',
  styleUrls: ['./league-standings-page.component.scss'],
})
export class LeagueStandingsPageComponent implements OnInit {

  standings$: Observable<StandingsResponseRankingInfo[]>;

  readonly columns  = [
    { name: 'Position' },
    { name: 'Team' },
    { name: 'GP' },
    { name: 'W' },
    { name: 'D' },
    { name: 'L' },
    { name: 'Form' },
    { name: 'Goals For' },
    { name: 'Goals Against' },
    { name: 'Goal Difference' },
    { name: 'Points' }
  ];

  constructor(private standingsFacade: StandingsFacade) { }

  ngOnInit() {
    this.standings$ = this.standingsFacade.standings$;
  }

}
