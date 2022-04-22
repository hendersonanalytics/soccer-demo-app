import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { LeagueFacade } from '../../leagues/facades/league.facade';

@Injectable({
  providedIn: 'root'
})
export class LeagueSeasonGuard implements CanActivate {
  constructor(
    private leagueFacade: LeagueFacade,
    private router: Router
  ) {}
  canActivate(): Observable<boolean | UrlTree> {
    return zip(this.leagueFacade.selectedLeague$, this.leagueFacade.selectedSeason$).pipe(
      map(([leagueId, season]) => {
        if ([leagueId, season].includes(null)) {
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    );
  }
}
