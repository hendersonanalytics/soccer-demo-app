import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlayerFacade } from '../../players/facades/player.facade';

@Injectable({
  providedIn: 'root'
})
export class PlayerGuard implements CanActivate {
  constructor(
    private playerFacade: PlayerFacade,
    private router: Router
  ) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.playerFacade.selectedPlayer$.pipe(
      map((playerId) => {
        if ([playerId].includes(null)) {
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    );
  }
}
