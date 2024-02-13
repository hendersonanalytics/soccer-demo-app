import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TeamFacade } from '../../teams/facades/team.facade';

@Injectable({
  providedIn: 'root'
})
export class TeamGuard implements CanActivate {
  constructor(
    private teamFacade: TeamFacade,
    private router: Router
  ) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.teamFacade.selectedTeam$.pipe(
      map((teamId) => {
        if ([teamId].includes(null)) {
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    );
  }
}
