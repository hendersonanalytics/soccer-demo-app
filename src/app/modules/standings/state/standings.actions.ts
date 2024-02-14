import { createAction, props } from '@ngrx/store';

import { STANDINGS_ACTIONS } from '../enums/standings-actions.enum';
import { FootballApiStandingsResponse } from '../models/football-api-standings-response.interface';
import { StandingsQueryParams } from '../models/standings-query-params.interface';

const fetchStandings = createAction(
    STANDINGS_ACTIONS.FETCH_STANDINGS,
    props<{ queryParams: StandingsQueryParams }>()
);

const fetchStandingsFail = createAction(STANDINGS_ACTIONS.FETCH_STANDINGS_FAIL);

const fetchStandingsSuccess = createAction(
    STANDINGS_ACTIONS.FETCH_STANDINGS_SUCCESS,
    props<{ response: FootballApiStandingsResponse }>()
);

export const standingsActions = {
    fetchStandings,
    fetchStandingsFail,
    fetchStandingsSuccess
};
