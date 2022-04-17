/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, concatMap, map } from 'rxjs/operators';

import { LeagueService } from '../services/league.service';
import { leagueActions } from './league.actions';

@Injectable()
export class LeagueEffects {
    fetchSeasons$ = createEffect(() => {
        return this.action$.pipe(
            ofType(leagueActions.fetchSeasons),
            concatMap(() => {
                return this.leagueService.fetchSeasons().pipe(
                    map(response => leagueActions.fetchSeasonsSuccess({response})),
                    catchError(() => of(leagueActions.fetchSeasonsFail()))
                );
            })
        );
    });

    fetchLeagues$ = createEffect(() => {
        return this.action$.pipe(
            ofType(leagueActions.fetchLeagues),
            concatMap((action) => {
                const { queryParams } = action;
                return this.leagueService.fetchLeagues(queryParams).pipe(
                    map(response => leagueActions.fetchLeaguesSuccess({response})),
                    catchError(() => of(leagueActions.fetchLeaguesFail()))
                );
            })
        );
    });

    constructor(
        private leagueService: LeagueService,
        private action$: Actions
    ) {}
}
