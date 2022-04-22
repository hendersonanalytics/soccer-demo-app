import { Action, createReducer, on } from '@ngrx/store';
import cloneDeep from 'lodash.clonedeep';
// import { teamActions } from '../../teams/state/team.actions';

import { PlayerStateInfo } from '../models/player-state-info.interface';
import { playerActions } from './player.actions';

export const featureKey = 'player';

export interface PlayerState {
    [featureKey]: PlayerStateInfo;
}

export const initialState: PlayerStateInfo = {
    available: [],
    nextPageNumber: 1,
    morePlayersAreAvailable: null,
    error: false,
    isLoading: false,
    paging: null
};

const reducer = createReducer(
    initialState,
    on(playerActions.fetchPlayers, playerActions.appendPlayers, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.isLoading = true;
        clonedState.error = false;
        return clonedState;
    }),
    on(playerActions.fetchPlayersFail, playerActions.appendPlayersFail, (state) => {
        const clonedState = cloneDeep(state);
        clonedState.isLoading = false;
        clonedState.error = true;
        return clonedState;
    }),
    on(playerActions.fetchPlayersSuccess, (state, action) => {
        const { paging, response } = action.response;
        const clonedState = cloneDeep(state);
        clonedState.isLoading = false;
        clonedState.available = response;
        clonedState.nextPageNumber++;
        clonedState.paging = paging;
        clonedState.morePlayersAreAvailable = paging.current < paging.total;
        return clonedState;
    }),
    on(playerActions.appendPlayersSuccess, (state, action) => {
        const { paging, response } = action.response;
        const clonedState = cloneDeep(state);
        clonedState.isLoading = false;
        clonedState.available = clonedState.available.concat(response);
        ++clonedState.nextPageNumber;
        clonedState.paging = paging;
        clonedState.morePlayersAreAvailable = paging.current < paging.total;
        return clonedState;
    }),
    on(playerActions.resetPlayers, (state, _) => {
        const clonedState = cloneDeep(state);
        clonedState.available = [];
        clonedState.nextPageNumber = 1;
        clonedState.paging = null;
        clonedState.morePlayersAreAvailable = null;
        return clonedState;
    }),
);

export const playerReducer = (state: PlayerStateInfo, action: Action) => reducer(state, action);
