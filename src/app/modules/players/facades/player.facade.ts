import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { FootballApiPlayerStatsInfo, FootballApiPlayersResponseInfo } from '../models/football-api-players-response-info.interface';

import { playerActions } from '../state/player.actions';
import { PlayerState } from '../state/player.reducer';
import { playerSelectors } from '../state/player.selectors';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { PlayerResponsePlayerInfo } from '../models/player-response-player-info.interface';

@Injectable({ providedIn: 'root' })
export class PlayerFacade {
    public isLoading$: Observable<boolean> = this.store.select(playerSelectors.selectIsLoading);
    public players$: Observable<FootballApiPlayersResponseInfo[]> = this.store.select(playerSelectors.selectPlayers);
    public morePlayersAreAvailable$: Observable<boolean> = this.store.select(playerSelectors.selectMorePlayersAreAvailable);
    public hasError$: Observable<boolean> = this.store.select(playerSelectors.selectError);
    public nextPageNumber$: Observable<number> = this.store.select(playerSelectors.selectNextPageNumber);
    public selectedPlayer$: Observable<number> = this.store.select(playerSelectors.selectSelectedPlayer);
    public selectedPlayerInfo$: Observable<FootballApiPlayersResponseInfo> = this.selectedPlayer$.pipe(
        filter(playerId => Boolean(playerId) === true),
        switchMap(playerId => {
            return this.players$.pipe(
                map(players => players.find(player => player.player.id === playerId)),
                catchError(() => of(null))
            );
        })
    );
    public selectedPlayerStats$: Observable<FootballApiPlayerStatsInfo> = this.selectedPlayerInfo$.pipe(
        filter(playerInfo => Boolean(playerInfo?.statistics) === true && playerInfo.statistics.length > 0),
        map(playerInfo => playerInfo.statistics[0])
    );
    public selectedPlayerAttributes$: Observable<PlayerResponsePlayerInfo> = this.selectedPlayerInfo$.pipe(
        filter(playerInfo => Boolean(playerInfo?.player) === true),
        map(playerInfo => playerInfo.player)
    );

    public isGoalkeeper$: Observable<boolean> = this.selectedPlayerStats$.pipe(
        map((stats) => {
            const position = stats?.games?.position;
            if (position && typeof position === 'string') {
                return position.toLowerCase() === 'goalkeeper';
            }
            return null;
        })
    );

    constructor(private store: Store<PlayerState>) {}

    appendPlayers(): void {
        this.store.dispatch(playerActions.appendPlayers());
    }

    selectPlayer(playerId: number): void {
        this.store.dispatch(playerActions.selectPlayer({playerId}));
    }
}
