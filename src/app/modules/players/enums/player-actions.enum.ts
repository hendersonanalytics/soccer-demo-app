/* eslint-disable @typescript-eslint/naming-convention */
export enum PLAYER_ACTIONS {
    FETCH_PLAYERS = '[player] FETCH_PLAYERS',
    FETCH_PLAYERS_FAIL = '[player] FETCH_PLAYERS_FAIL',
    FETCH_PLAYERS_SUCCESS = '[player] FETCH_PLAYERS_SUCCESS',

    RESET_PLAYERS = '[player] RESET_PLAYERS',
    SELECT_PLAYER = '[player] SELECT_PLAYER',

    APPEND_PLAYERS = '[player] APPEND_PLAYERS',
    APPEND_PLAYERS_FAIL = '[player] APPEND_PLAYERS_FAIL',
    APPEND_PLAYERS_SUCCESS = '[player] APPEND_PLAYERS_SUCCESS'
}
