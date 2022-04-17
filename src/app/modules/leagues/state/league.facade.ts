import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LeagueQueryParams } from '../models/league-query-params.interface';
import { leagueActions } from './league.actions';
import { LeagueState } from './league.reducer';

@Injectable({ providedIn: 'root' })
export class LeagueFacade {
    constructor(private store: Store<LeagueState>) {}

    fetchLeagues(queryParams: LeagueQueryParams): void {
        this.store.dispatch(leagueActions.fetchLeagues({queryParams}));
    }

    fetchSeasons(): void {
        this.store.dispatch(leagueActions.fetchSeasons());
    }
}
