import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LeagueStateInfo } from '../models/league-state-info.interface';
import { featureKey } from './league.reducer';

const leagueSelector = createFeatureSelector<LeagueStateInfo>(featureKey);

const selectLeague = createSelector(leagueSelector, (league: LeagueStateInfo) => league);

const selectSeasons = createSelector(selectLeague, (league: LeagueStateInfo) => league?.seasons?.available);
const selectSeasonSelected = createSelector(selectLeague, (league: LeagueStateInfo) => league?.seasons?.selected);
const selectSeasonsIsLoading = createSelector(selectLeague, (league: LeagueStateInfo) => league?.seasons?.isLoading);
const selectSeasonsError = createSelector(selectLeague, (league: LeagueStateInfo) => league?.seasons?.error);

const selectCountries = createSelector(selectLeague, (league: LeagueStateInfo) => league?.countries?.available);
const selectCountrySelected = createSelector(selectLeague, (league: LeagueStateInfo) => league?.countries?.selected);

const selectLeagues = createSelector(selectLeague, (league: LeagueStateInfo) => league?.leagues?.available);
const selectLeagueSelected = createSelector(selectLeague, (league: LeagueStateInfo) => league?.leagues?.selected);
const selectLeaguesIsLoading = createSelector(selectLeague, (league: LeagueStateInfo) => league?.leagues?.isLoading);
const selectLeaguesError = createSelector(selectLeague, (league: LeagueStateInfo) => league?.leagues?.error);

export const leagueSelectors = {
    selectSeasons,
    selectSeasonSelected,
    selectSeasonsIsLoading,
    selectSeasonsError,
    selectCountries,
    selectCountrySelected,
    selectLeagues,
    selectLeagueSelected,
    selectLeaguesIsLoading,
    selectLeaguesError
};
