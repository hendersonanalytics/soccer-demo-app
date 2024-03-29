import { createAction, props } from '@ngrx/store';

import { PLAYER_ACTIONS } from '../enums/player-actions.enum';
import { FootballApiPlayersResponse } from '../models/football-api-players-response.interface';
import { PlayerQueryParams } from '../models/player-query-params.interface';

const fetchPlayers = createAction(
    PLAYER_ACTIONS.FETCH_PLAYERS,
    props<{ queryParams: PlayerQueryParams }>()
);

const fetchPlayersFail = createAction(PLAYER_ACTIONS.FETCH_PLAYERS_FAIL);

const fetchPlayersSuccess = createAction(
    PLAYER_ACTIONS.FETCH_PLAYERS_SUCCESS,
    props<{ response: FootballApiPlayersResponse }>()
);

const appendPlayers = createAction(PLAYER_ACTIONS.APPEND_PLAYERS);

const appendPlayersFail = createAction(PLAYER_ACTIONS.APPEND_PLAYERS_FAIL);

const appendPlayersSuccess = createAction(
    PLAYER_ACTIONS.APPEND_PLAYERS_SUCCESS,
    props<{ response: FootballApiPlayersResponse }>()
);

const resetPlayers = createAction(
    PLAYER_ACTIONS.RESET_PLAYERS,
    props<{ queryParams: PlayerQueryParams }>()
);

const selectPlayer = createAction(
    PLAYER_ACTIONS.SELECT_PLAYER,
    props<{ playerId: number }>()
);

export const playerActions = {
    fetchPlayers,
    fetchPlayersFail,
    fetchPlayersSuccess,

    appendPlayers,
    appendPlayersFail,
    appendPlayersSuccess,

    resetPlayers,
    selectPlayer
};
