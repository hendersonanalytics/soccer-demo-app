/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Action, createReducer, on } from '@ngrx/store';

import cloneDeep from 'lodash.clonedeep';

import { LeagueLimitedInfo } from '../../players/models/football-api-players-response-info.interface';
import { StandingsResponseRankingInfo } from '../models/football-api-standings-response-info.interface';

import { standingsActions } from './standings.actions';

export const featureKey = 'standings';

export interface StandingsState {
    [featureKey]: StandingsStateInfo;
}

export interface StandingsStateInfo {
    league: LeagueLimitedInfo;
    standings: StandingsResponseRankingInfo[];
    error: boolean;
    isLoading: boolean;
}

export const initialState: StandingsStateInfo = {
    league: {
        id: null,
        name: null,
        country: null,
        logo: null,
        flag: null,
        season: null
    },
    standings: [],
    error: false,
    isLoading: false,
};

const reducer = createReducer(
    initialState,
    on(standingsActions.fetchStandings, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.isLoading = true;
        clonedState.error = false;
        return clonedState;
    }),
    on(standingsActions.fetchStandingsFail, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.isLoading = false;
        clonedState.error = true;
        return clonedState;
    }),
    on(standingsActions.fetchStandingsSuccess, (state, action) => {
        const { id, name, country, logo, flag, season } = action?.response?.response?.[0]?.league || {};
        const standings = action.response?.response?.[0]?.league?.standings?.[0] || [];
        const league = { id, name, country, logo, flag, season };

        return {
            error: false,
            isLoading: false,
            league,
            standings
        };
    }),
);

export const standingsReducer = (state: StandingsStateInfo, action: Action) => reducer(state, action);
