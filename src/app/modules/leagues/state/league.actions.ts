import { createAction, props } from '@ngrx/store';
import { LEAGUE_ACTIONS } from '../enums/league-actions.enum';
import { FootballApiLeaguesResponse } from '../models/football-api-leagues-response.interface';
import { FootballApiSeasonsResponse } from '../models/football-api-seasons-response.interface';
import { LeagueQueryParams } from '../models/league-query-params.interface';

const fetchSeasons = createAction(LEAGUE_ACTIONS.FETCH_SEASONS);
const fetchSeasonsFail = createAction(LEAGUE_ACTIONS.FETCH_SEASONS_FAIL);

const fetchSeasonsSuccess = createAction(
    LEAGUE_ACTIONS.FETCH_SEASONS_SUCCESS,
    props<{ response: FootballApiSeasonsResponse }>()
);

const fetchLeagues = createAction(
    LEAGUE_ACTIONS.FETCH_LEAGUES,
    props<{ queryParams: LeagueQueryParams }>()
);

const fetchLeaguesFail = createAction(LEAGUE_ACTIONS.FETCH_LEAGUES_FAIL);

const fetchLeaguesSuccess = createAction(
    LEAGUE_ACTIONS.FETCH_LEAGUES_SUCCESS,
    props<{ response: FootballApiLeaguesResponse }>()
);

const selectSeason = createAction(
    LEAGUE_ACTIONS.SELECT_SEASON,
    props<{ season: number }>()
);

const selectLeague = createAction(
    LEAGUE_ACTIONS.SELECT_LEAGUE,
    props<{ league: number }>()
);

const selectCountry = createAction(
    LEAGUE_ACTIONS.SELECT_COUNTRY,
    props<{ country: string }>()
);

export const leagueActions = {
    fetchSeasons,
    fetchSeasonsFail,
    fetchSeasonsSuccess,

    fetchLeagues,
    fetchLeaguesFail,
    fetchLeaguesSuccess,

    selectSeason,
    selectLeague,
    selectCountry
};
