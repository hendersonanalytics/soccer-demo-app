import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerStateInfo } from '../models/player-state-info.interface';

import { featureKey } from './player.reducer';

const playerSelector = createFeatureSelector<PlayerStateInfo>(featureKey);

const selectPlayer = createSelector(playerSelector, (player: PlayerStateInfo) => player);

const selectPlayers = createSelector(selectPlayer, (player: PlayerStateInfo) => player?.available);
const selectIsLoading = createSelector(selectPlayer, (player: PlayerStateInfo) => player?.isLoading);
const selectMorePlayersAreAvailable = createSelector(selectPlayer, (player: PlayerStateInfo) => player?.morePlayersAreAvailable);
const selectError = createSelector(selectPlayer, (player: PlayerStateInfo) => player?.error);

export const playerSelectors = {
    selectPlayers,
    selectIsLoading,
    selectMorePlayersAreAvailable,
    selectError
};
