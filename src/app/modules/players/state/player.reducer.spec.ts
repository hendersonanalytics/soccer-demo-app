import { TEST_PLAYERS_RESPONSE } from 'src/app/support/data/test-players-response';
import { TEST_PLAYERS_RESPONSE_PAGE_3 } from 'src/app/support/data/test-players-response-page-3';
import { TEAM_ACTIONS } from '../../teams/enums/team-actions.enum';
import { PLAYER_ACTIONS } from '../enums/player-actions.enum';
import { PlayerStateInfo } from '../models/player-state-info.interface';
import { PLAYER_STATE_TEST_DATA } from '../support/data/player-state-test-data';
import * as fromReducer from './player.reducer';

describe('Player reducer', () => {
    let initialState: PlayerStateInfo;
    let action: any;

    beforeEach(() => {
        initialState = fromReducer.initialState;
    });

    describe('fetchPlayers actions', () => {
        it('handles fetchPlayers action properly', () => {
            action = { type: PLAYER_ACTIONS.FETCH_PLAYERS };
            const state = fromReducer.playerReducer(initialState, action);
            const expectedState: PlayerStateInfo = {
                ...initialState,
                isLoading: true,
                error: false
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchPlayersFail action properly', () => {
            action = { type: PLAYER_ACTIONS.FETCH_PLAYERS_FAIL };
            const state = fromReducer.playerReducer(initialState, action);
            const expectedState: PlayerStateInfo = {
                ...initialState,
                isLoading: false,
                error: true
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchPlayersSuccess action properly', () => {
            const response = TEST_PLAYERS_RESPONSE;
            const { paging } = response;
            action = {
                type: PLAYER_ACTIONS.FETCH_PLAYERS_SUCCESS,
                response
            };

            const state = fromReducer.playerReducer(initialState, action);
            const morePlayersAreAvailable = paging.current !== paging.total;
            const expectedState: PlayerStateInfo = {
                ...initialState,
                available: response.response,
                nextPageNumber: 2,
                isLoading: false,
                paging,
                morePlayersAreAvailable: true
            };
            expect(state).toEqual(expectedState);
        });
    });

    describe('appendPlayers actions', () => {
        it('handles appendPlayers action properly', () => {
            action = { type: PLAYER_ACTIONS.APPEND_PLAYERS };
            const state = fromReducer.playerReducer(initialState, action);
            initialState = {
                ...initialState

            };
            const expectedState: PlayerStateInfo = {
                ...initialState,
                isLoading: true,
                error: false
            };
            expect(state).toEqual(expectedState);
        });

        it('handles appendPlayersFail action properly', () => {
            action = { type: PLAYER_ACTIONS.APPEND_PLAYERS_FAIL };
            const state = fromReducer.playerReducer(initialState, action);
            const expectedState: PlayerStateInfo = {
                ...initialState,
                isLoading: false,
                error: true
            };
            expect(state).toEqual(expectedState);
        });

        it('handles appendPlayersSuccess action properly', () => {
            const response = TEST_PLAYERS_RESPONSE_PAGE_3;
            const { paging } = response;
            action = {
                type: PLAYER_ACTIONS.APPEND_PLAYERS_SUCCESS,
                response
            };

            initialState = {
                ...initialState,
                nextPageNumber: 3,
                available: TEST_PLAYERS_RESPONSE.response,
                morePlayersAreAvailable: true,
                paging: { current: 2, total: 3 }
            };

            const state = fromReducer.playerReducer(initialState, action);
            const expectedState: PlayerStateInfo = {
                ...initialState,
                available: PLAYER_STATE_TEST_DATA,
                nextPageNumber: 4,
                isLoading: false,
                paging,
                morePlayersAreAvailable: false
            };
            expect(state).toEqual(expectedState);
        });
    });

    it('handles selectTeam action', () => {
        action = { type: TEAM_ACTIONS.SELECT_TEAM };

        initialState = {
            ...initialState,
            nextPageNumber: 3,
            available: TEST_PLAYERS_RESPONSE.response,
            morePlayersAreAvailable: true,
            paging: { current: 2, total: 3 }
        };

        const state = fromReducer.playerReducer(initialState, action);
        const expectedState: PlayerStateInfo = {
            ...initialState,
            available: [],
            nextPageNumber: 1,
            paging: null,
            morePlayersAreAvailable: null
        };
        expect(state).toEqual(expectedState);
    });
});
