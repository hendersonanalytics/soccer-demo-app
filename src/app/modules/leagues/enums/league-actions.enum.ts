/* eslint-disable @typescript-eslint/naming-convention */
export enum LEAGUE_ACTIONS {
    FETCH_SEASONS = '[league] FETCH_SEASONS',
    FETCH_SEASONS_FAIL = '[league] FETCH_SEASONS_FAIL',
    FETCH_SEASONS_SUCCESS = '[league] FETCH_SEASONS_SUCCESS',

    FETCH_LEAGUES = '[league] FETCH_LEAGUES',
    FETCH_LEAGUES_FAIL = '[league] FETCH_LEAGUES_FAIL',
    FETCH_LEAGUES_SUCCESS = '[league] FETCH_LEAGUES_SUCCESS',

    SELECT_SEASON = '[league] SELECT_SEASON',
    SELECT_LEAGUE = '[league] SELECT_LEAGUE',
    SELECT_COUNTRY = '[league] SELECT_COUNTRY',
}
