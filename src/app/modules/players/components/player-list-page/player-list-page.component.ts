import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamFacade } from 'src/app/modules/teams/facades/team.facade';
import { FootballApiTeamsResponseInfo } from 'src/app/modules/teams/models/football-api-teams-response-info.interface';
import { PlayerFacade } from '../../facades/player.facade';
import { FootballApiPlayersResponseInfo } from '../../models/football-api-players-response-info.interface';

@Component({
  selector: 'app-player-list-page',
  templateUrl: './player-list-page.component.html',
  styleUrls: ['./player-list-page.component.scss'],
})
export class PlayerListPageComponent implements OnInit {
  players$: Observable<FootballApiPlayersResponseInfo[]>;
  morePlayersAreAvailable$: Observable<boolean>;
  team$: Observable<FootballApiTeamsResponseInfo>;

  constructor(
    private playerFacade: PlayerFacade,
    private teamFacade: TeamFacade
  ) { }

  ngOnInit() {
    this.players$ = this.playerFacade.players$;
    this.morePlayersAreAvailable$ = this.playerFacade.morePlayersAreAvailable$;
    this.team$ = this.teamFacade.selectedTeamInfo$;
  }

  onClickShowMore() {
    this.playerFacade.appendPlayers();
  }

}
