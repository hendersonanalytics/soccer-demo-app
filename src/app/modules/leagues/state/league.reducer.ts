/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Action, createReducer, on } from '@ngrx/store';

import cloneDeep from 'lodash.clonedeep';
import { FootballApiLeaguesResponse } from '../models/football-api-leagues-response.interface';

import { LeagueStateInfo } from '../models/league-state-info.interface';
import { leagueActions } from './league.actions';

export const featureKey = 'league';

export interface LeagueState {
    [featureKey]: LeagueStateInfo;
}

export const initialState: LeagueStateInfo = {
    seasons: {
        available: [],
        selected: null,
        error: false,
        isLoading: false,
    },
    countries: {
        available: [],
        selected: null
    },
    leagues: {
        available: [],
        selected: null,
        error: false,
        isLoading: false,
    }
};

function getCountriesFromLeaguesResponse(response: FootballApiLeaguesResponse): string[] {
    const countrySet = new Set();
    response.response.forEach(league => {
        countrySet.add(league.country.name);
    });

    return Array.from(countrySet).sort() as string[];
}

const reducer = createReducer(
    initialState,
    on(leagueActions.fetchSeasons, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.seasons.isLoading = true;
        clonedState.seasons.error = false;
        return clonedState;
    }),
    on(leagueActions.fetchSeasonsFail, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.seasons.isLoading = false;
        clonedState.seasons.error = true;
        return clonedState;
    }),
    on(leagueActions.fetchSeasonsSuccess, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.seasons.isLoading = false;
        clonedState.seasons.available = action.response.response;
        return clonedState;
    }),
    on(leagueActions.fetchLeagues, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.leagues.isLoading = true;
        clonedState.leagues.error = false;
        return clonedState;
    }),
    on(leagueActions.fetchLeaguesFail, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.leagues.isLoading = false;
        clonedState.leagues.error = true;
        return clonedState;
    }),
    on(leagueActions.fetchLeaguesSuccess, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.leagues.isLoading = false;
        clonedState.leagues.available = action.response.response;
        clonedState.countries.available = getCountriesFromLeaguesResponse(action.response);
        return clonedState;
    }),
    on(leagueActions.selectCountry, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.countries.selected = action.country;
        return clonedState;
    }),
    on(leagueActions.selectLeague, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.leagues.selected = parseInt(action.league, 10);
        return clonedState;
    }),
    on(leagueActions.selectSeason, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.seasons.selected = parseInt(action.season, 10);
        return clonedState;
    }),
);

export const leagueReducer = (state: LeagueStateInfo, action: Action) => reducer(state, action);
