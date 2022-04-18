/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { PlayerService } from '../services/player.service';
import { playerActions } from './player.actions';

@Injectable()
export class PlayerEffects {
    fetchPlayers$ = createEffect(() => {
        return this.action$.pipe(
            ofType(playerActions.fetchPlayers),
            concatMap((action) => {
                const { queryParams } = action;
                return this.playerService.fetchPlayers(queryParams).pipe(
                    map(response => playerActions.fetchPlayersSuccess({response})),
                    catchError(() => of(playerActions.fetchPlayersFail()))
                );
            })
        );
    });

    appendPlayers$ = createEffect(() => {
        return this.action$.pipe(
            ofType(playerActions.appendPlayers),
            concatMap((action) => {
                const { queryParams } = action;
                return this.playerService.fetchPlayers(queryParams).pipe(
                    map(response => playerActions.appendPlayersSuccess({response})),
                    catchError(() => of(playerActions.appendPlayersFail()))
                );
            })
        );
    });

    constructor(
        private playerService: PlayerService,
        private action$: Actions
    ) {}
}
