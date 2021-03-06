import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FootballApiPlayersResponseInfo } from '../models/football-api-players-response-info.interface';

import { playerActions } from '../state/player.actions';
import { PlayerState } from '../state/player.reducer';
import { playerSelectors } from '../state/player.selectors';

@Injectable({ providedIn: 'root' })
export class PlayerFacade {
    public isLoading$: Observable<boolean> = this.store.select(playerSelectors.selectIsLoading);
    public players$: Observable<FootballApiPlayersResponseInfo[]> = this.store.select(playerSelectors.selectPlayers);
    public morePlayersAreAvailable$: Observable<boolean> = this.store.select(playerSelectors.selectMorePlayersAreAvailable);
    public hasError$: Observable<boolean> = this.store.select(playerSelectors.selectError);
    public nextPageNumber$: Observable<number> = this.store.select(playerSelectors.selectNextPageNumber);

    constructor(private store: Store<PlayerState>) {}

    appendPlayers(): void {
        this.store.dispatch(playerActions.appendPlayers());
    }
}
