/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StandingsQueryParams } from '../models/standings-query-params.interface';
import { standingsActions } from '../state/standings.actions';
import { StandingsState } from '../state/standings.reducer';
import { standingsSelectors } from '../state/standings.selectors';
import { LeagueLimitedInfo } from '../../players/models/football-api-players-response-info.interface';
import { FlattenedStandingsInfo, StandingsResponseRankingInfo } from '../models/football-api-standings-response-info.interface';

@Injectable({ providedIn: 'root' })
export class StandingsFacade {
    isLoading$: Observable<boolean> = this.store.select(standingsSelectors.selectIsLoading);
    hasError$: Observable<boolean> = this.store.select(standingsSelectors.selectError);
    league$: Observable<LeagueLimitedInfo> = this.store.select(standingsSelectors.selectLeague);
    standings$: Observable<StandingsResponseRankingInfo[]> = this.store.select(standingsSelectors.selectStandingsInfo);
    flattenedStandings$: Observable<FlattenedStandingsInfo[]> = this.store.select(standingsSelectors.selectFlattenedStandingsInfo);

    constructor(private store: Store<StandingsState>) {}

    fetchStandings(queryParams: StandingsQueryParams): void {
        this.store.dispatch(standingsActions.fetchStandings({queryParams}));
    }
}
