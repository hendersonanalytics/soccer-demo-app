/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, concatMap, map, tap } from 'rxjs/operators';

import { LeagueService } from '../services/league.service';
import { leagueActions } from './league.actions';
import { leagueSelectors } from './league.selectors';
import { Store } from '@ngrx/store';
import { QUERY_PARAMS } from 'src/app/configs/query-params.enum';

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

    selectSeason$ = createEffect(() => {
        return this.action$.pipe(
            ofType(leagueActions.selectSeason),
            map((action) => {
                const { season } = action;
                const queryParams = {season};
                return leagueActions.fetchLeagues({queryParams});
            })
        );
    });

    selectSeasonWithoutAutoFetch$ = createEffect(() => {
        return this.action$.pipe(
            ofType(leagueActions.selectSeasonWithoutAutoFetch),
            concatLatestFrom(() => this.store.select(leagueSelectors.selectSeasons)),
            map(([action, seasons]) => {
                return (seasons?.length === 0) || !seasons ?
                    leagueActions.fetchSeasons() :
                    leagueActions.noOpAction()
            })
        );
    });

    selectLeagueWithoutAutoFetch$ = createEffect(() => {
        return this.action$.pipe(
            ofType(leagueActions.selectLeagueWithoutAutoFetch),
            concatLatestFrom((action) => [
                this.store.select(leagueSelectors.selectLeagues),
                this.store.select(leagueSelectors.selectSeasonSelected),
                this.store.select(leagueSelectors.selectCountrySelected),
              ]),
            map(([action, leagues, selectedSeason, selectedCountry]) => {
                if ((leagues?.length === 0) || !leagues) {
                    const queryParams = {
                        [QUERY_PARAMS.SEASON]: selectedSeason,
                        [QUERY_PARAMS.COUNTRY]: selectedCountry,
                    };
                    return leagueActions.fetchLeagues({ queryParams })
                }
                return leagueActions.noOpAction();
            })
        );
    });

    noOpEffect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(leagueActions.noOpAction),
            tap(() => {})
        );
    }, { dispatch: false });

    constructor(
        private leagueService: LeagueService,
        private action$: Actions,
        private store: Store,
    ) {}
}
