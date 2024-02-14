/* eslint-disable prefer-arrow/prefer-arrow-functions */

import { StandingsStateInfo } from './standings.reducer';
import * as fromReducer from './standings.reducer';
import { STANDINGS_ACTIONS } from '../enums/standings-actions.enum';
import { TEST_STANDINGS_ARRAY, TEST_STANDINGS_RESPONSE } from 'src/app/support/data/test-standings-response';


describe('Standings reducer', () => {
    let initialState: StandingsStateInfo;
    let action: any;

    beforeEach(() => {
        initialState = fromReducer.initialState;
    });

    describe('fetchStandings actions', () => {
        it('handles fetchStandings action properly', () => {
            const season = 2021;
            const leagueId = 39;
            const queryParams = { season, leagueId };

            action = { type: STANDINGS_ACTIONS.FETCH_STANDINGS, queryParams };
            const state = fromReducer.standingsReducer(initialState, action);
            const expectedState: StandingsStateInfo = {
                ...initialState,
                isLoading: true,
                error: false,
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchStandingsFail action properly', () => {
            action = { type: STANDINGS_ACTIONS.FETCH_STANDINGS_FAIL };
            const state = fromReducer.standingsReducer(initialState, action);
            const expectedState: StandingsStateInfo = {
                ...initialState,
                isLoading: false,
                error: true,
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchStandingsSuccess action properly', () => {
            const response = TEST_STANDINGS_RESPONSE;
            action = {
                type: STANDINGS_ACTIONS.FETCH_STANDINGS_SUCCESS,
                response
            };

            const league = {
                id: 39,
                name: "Premier League",
                country: "England",
                logo: "https://media.api-sports.io/football/leagues/39.png",
                flag: "https://media.api-sports.io/flags/gb.svg",
                season: 2023,
            };

            const standings = TEST_STANDINGS_ARRAY;

            const state = fromReducer.standingsReducer(initialState, action);

            const expectedState: StandingsStateInfo = {
                ...initialState,
                league,
                standings,
                isLoading: false,
                error: false,
            };
            expect(state).toEqual(expectedState);
        });
    });
});

