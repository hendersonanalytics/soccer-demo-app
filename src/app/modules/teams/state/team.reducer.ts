import { Action, createReducer, on } from '@ngrx/store';

import cloneDeep from 'lodash.clonedeep';

import { TeamStateInfo } from '../models/team-state-info.interface';
import { teamActions } from './team.actions';

export const featureKey = 'team';

export interface TeamState {
    [featureKey]: TeamStateInfo;
}

export const initialState: TeamStateInfo = {
    available: [],
    selected: null,
    isLoading: false,
    error: false
};

const reducer = createReducer(
    initialState,
    on(teamActions.fetchTeams, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.isLoading = true;
        clonedState.error = false;
        return clonedState;
    }),
    on(teamActions.fetchTeamsFail, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.isLoading = false;
        clonedState.error = true;
        return clonedState;
    }),
    on(teamActions.fetchTeamsSuccess, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.isLoading = false;
        clonedState.available = action.response.response;
        return clonedState;
    }),
    on(teamActions.selectTeam, (state, action) => {
        const clonedState = cloneDeep(state);
        clonedState.selected = action.teamId;
        return clonedState;
    }),
);

export const teamReducer = (state: TeamStateInfo, action: Action) => reducer(state, action);
