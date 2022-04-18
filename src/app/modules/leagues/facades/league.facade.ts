/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { FootballApiLeaguesResponseInfo } from '../models/football-api-leagues-response-info.interface';

import { LeagueQueryParams } from '../models/league-query-params.interface';
import { leagueActions } from '../state/league.actions';
import { LeagueState } from '../state/league.reducer';
import { leagueSelectors } from '../state/league.selectors';

@Injectable({ providedIn: 'root' })
export class LeagueFacade {
    // seasons
    seasonsIsLoading$: Observable<boolean> = this.store.select(leagueSelectors.selectSeasonsIsLoading);
    seasonsHasError$: Observable<boolean> = this.store.select(leagueSelectors.selectSeasonsError);
    seasons$: Observable<number[]> = this.store.select(leagueSelectors.selectSeasons);
    selectedSeason$: Observable<number> = this.store.select(leagueSelectors.selectSeasonSelected);

    // countries
    countries$: Observable<string[]> = this.store.select(leagueSelectors.selectCountries);
    selectedCountry$: Observable<string> = this.store.select(leagueSelectors.selectCountrySelected);

    // leagues
    leaguesIsLoading$: Observable<boolean> = this.store.select(leagueSelectors.selectLeaguesIsLoading);
    leaguesHasError$: Observable<boolean> = this.store.select(leagueSelectors.selectLeaguesError);
    selectedLeague$: Observable<number> = this.store.select(leagueSelectors.selectLeagueSelected);

    filteredLeagues$: Observable<FootballApiLeaguesResponseInfo[]> = this.selectedCountry$.pipe(
        filter((country) => Boolean(country)  === true),
        mergeMap((country) => {
            return this.allLeagues$.pipe(
                map(leagues => leagues.filter(league => league.country.name === country)),
                catchError(() => of([]))
            );
        })
    );

    private allLeagues$: Observable<FootballApiLeaguesResponseInfo[]> = this.store.select(leagueSelectors.selectLeagues);

    constructor(private store: Store<LeagueState>) {}

    fetchLeagues(queryParams: LeagueQueryParams): void {
        this.store.dispatch(leagueActions.fetchLeagues({queryParams}));
    }

    fetchSeasons(): void {
        this.store.dispatch(leagueActions.fetchSeasons());
    }
}