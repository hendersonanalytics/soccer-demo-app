import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueFacade } from 'src/app/modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from 'src/app/modules/leagues/models/football-api-leagues-response-info.interface';

import { TeamFacade } from '../../modules/teams/facades/team.facade';
import { FootballApiTeamsResponseInfo } from '../../modules/teams/models/football-api-teams-response-info.interface';

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

  constructor(
    private teamFacade: TeamFacade,
    private leagueFacade: LeagueFacade
  ) { }

  ngOnInit() {
    this.teams$ = this.teamFacade.teams$;
    this.isLoading$ = this.teamFacade.isLoading$;
    this.hasError$ = this.teamFacade.hasError$;
    this.league$ = this.leagueFacade.selectedLeagueInfo$;
    this.season$ = this.leagueFacade.selectedSeason$;
  }

  onSelectTeam(teamId: number): void {
    this.teamFacade.selectTeam(teamId);
  }
}
