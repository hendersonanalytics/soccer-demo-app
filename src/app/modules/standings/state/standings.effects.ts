/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { StandingsService } from '../services/standings.service';
import { standingsActions } from './standings.actions';

@Injectable()
export class StandingsEffects {
    fetchStandings$ = createEffect(() => {
        return this.action$.pipe(
            ofType(standingsActions.fetchStandings),
            concatMap((action) => {
                const { queryParams } = action;
                return this.standingsService.fetchStandings(queryParams).pipe(
                    map(response => standingsActions.fetchStandingsSuccess({response})),
                    catchError(() => of(standingsActions.fetchStandingsFail()))
                );
            })
        );
    });

    constructor(
        private standingsService: StandingsService,
        private action$: Actions
    ) {}
}
