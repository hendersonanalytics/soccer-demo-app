import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TeamStateInfo } from '../models/team-state-info.interface';
import { featureKey } from './team.reducer';

const teamSelector = createFeatureSelector<TeamStateInfo>(featureKey);

const selectTeam = createSelector(teamSelector, (team: TeamStateInfo) => team);

const selectTeams = createSelector(selectTeam, (team: TeamStateInfo) => team?.available);
const selectIsLoading = createSelector(selectTeam, (team: TeamStateInfo) => team?.isLoading);
const selectError = createSelector(selectTeam, (team: TeamStateInfo) => team?.error);

export const teamSelectors = {
    selectTeams,
    selectIsLoading,
    selectError
};
