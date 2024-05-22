import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StandingsStateInfo, featureKey } from './standings.reducer';
import { FlattenedStandingsInfo } from '../models/football-api-standings-response-info.interface';
import { LeagueLimitedInfo } from '../../players/models/football-api-players-response-info.interface';

const standingsSelector = createFeatureSelector<StandingsStateInfo>(featureKey);

const selectStandings = createSelector(standingsSelector, (standings: StandingsStateInfo) => standings);

const selectStandingsInfo = createSelector(selectStandings, (standings: StandingsStateInfo) => standings?.standings);

const selectFlattenedStandingsInfo = createSelector(selectStandings, (standings: StandingsStateInfo) => {
    const obj = standings?.standings.map((standing) => {
        return {
            rank: standing.rank,
            team: standing.team.name,
            gamesPlayed: standing.all.played,
            won: standing.all.win,
            drawn: standing.all.draw,
            lost: standing.all.lose,
            form: standing.form,
            goalsFor: standing.all.goals.for,
            goalsAgainst: standing.all.goals.against,
            goalDifference: standing.goalsDiff,
            points: standing.points,
        } as FlattenedStandingsInfo;
    });
    return obj;
});

const selectLeague = createSelector(selectStandings, (standings: StandingsStateInfo): LeagueLimitedInfo => standings?.league);
const selectIsLoading = createSelector(selectStandings, (standings: StandingsStateInfo): boolean => standings?.isLoading);
const selectError = createSelector(selectStandings, (standings: StandingsStateInfo): boolean => standings?.error);

export const standingsSelectors = {
    selectStandingsInfo,
    selectIsLoading,
    selectError,
    selectLeague,
    selectFlattenedStandingsInfo
};
