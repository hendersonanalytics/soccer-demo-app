import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TeamFacade } from '../../facades/team.facade';
import { FootballApiTeamsResponseInfo } from '../../models/football-api-teams-response-info.interface';

@Component({
  selector: 'app-team-list-page',
  templateUrl: './team-list-page.component.html',
  styleUrls: ['./team-list-page.component.scss'],
})
export class TeamListPageComponent implements OnInit {
  teams$: Observable<FootballApiTeamsResponseInfo[]>;
  isLoading$: Observable<boolean>;
  hasError$: Observable<boolean>;

  constructor(
    private teamFacade: TeamFacade,
  ) { }

  ngOnInit() {
    this.teams$ = this.teamFacade.teams$;
    this.isLoading$ = this.teamFacade.isLoading$;
    this.hasError$ = this.teamFacade.hasError$;
  }

  onSelectTeam(teamId: number): void {
    this.teamFacade.selectTeam(teamId);
  }
}
