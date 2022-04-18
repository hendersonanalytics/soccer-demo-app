import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FootballApiPlayersResponseInfo } from '../models/football-api-players-response-info.interface';

import { PlayerQueryParams } from '../models/player-query-params.interface';
import { playerActions } from '../state/player.actions';
import { PlayerState } from '../state/player.reducer';
import { playerSelectors } from '../state/player.selectors';

@Injectable({ providedIn: 'root' })
export class PlayerFacade {
    public isLoading$: Observable<boolean> = this.store.select(playerSelectors.selectIsLoading);
    public players$: Observable<FootballApiPlayersResponseInfo[]> = this.store.select(playerSelectors.selectPlayers);
    public morePlayersAreAvailable$: Observable<boolean> = this.store.select(playerSelectors.selectMorePlayersAreAvailable);
    public hasError$: Observable<boolean> = this.store.select(playerSelectors.selectError);

    constructor(private store: Store<PlayerState>) {}

    fetchPlayers(queryParams: PlayerQueryParams): void {
        this.store.dispatch(playerActions.fetchPlayers({queryParams}));
    }

    appendPlayers(queryParams: PlayerQueryParams): void {
        this.store.dispatch(playerActions.appendPlayers({queryParams}));
    }
}
