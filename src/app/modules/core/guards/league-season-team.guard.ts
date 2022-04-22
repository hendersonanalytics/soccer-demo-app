import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { LeagueFacade } from '../../leagues/facades/league.facade';
import { TeamFacade } from '../../teams/facades/team.facade';

@Injectable({
  providedIn: 'root'
})
export class LeagueSeasonTeamGuard implements CanActivate {
  constructor(
    private leagueFacade: LeagueFacade,
    private teamFacade: TeamFacade,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return zip(
      this.leagueFacade.selectedLeague$,
      this.leagueFacade.selectedSeason$,
      this.teamFacade.selectedTeam$
      ).pipe(
      map(([leagueId, season, teamId]) => {
        if ([leagueId, season, teamId].includes(null)) {
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    );
  }
}
