import { createAction, props } from '@ngrx/store';

import { TEAM_ACTIONS } from '../enums/team-actions.enum';
import { FootballApiTeamsResponse } from '../models/football-api-teams-response.interface';
import { TeamQueryParams } from '../models/team-query-params.interface';

const fetchTeams = createAction(
    TEAM_ACTIONS.FETCH_TEAMS,
    props<{ queryParams: TeamQueryParams }>()
);
const fetchTeamsFail = createAction(TEAM_ACTIONS.FETCH_TEAMS_FAIL);

const fetchTeamsSuccess = createAction(
    TEAM_ACTIONS.FETCH_TEAMS_SUCCESS,
    props<{ response: FootballApiTeamsResponse }>()
);

const selectTeam = createAction(
    TEAM_ACTIONS.SELECT_TEAM,
    props<{ teamId: string }>()
);

export const teamActions = {
    fetchTeams,
    fetchTeamsFail,
    fetchTeamsSuccess,

    selectTeam
};
