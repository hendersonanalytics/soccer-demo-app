import { LeagueStateInfo } from '../models/league-state-info.interface';
import * as fromReducer from './league.reducer';

import { LEAGUE_ACTIONS } from '../enums/league-actions.enum';
import { TEST_SEASONS_RESPONSE } from 'src/app/support/data/test-seasons-response';
import { TEST_LEAGUES_RESPONSE } from 'src/app/support/data/test-leagues-response';

describe('League reducer', () => {
    let initialState: LeagueStateInfo;
    let action: any;

    const COUNTRIES = [
        'Argentina','Belarus','Belgium','Brazil','Bulgaria','China','Costa-Rica','Denmark',
        'England','France','Germany','Iceland','Italy','Japan','Netherlands','Norway',
        'Poland','Portugal','Scotland','Spain','Sweden','Wales','World'
    ];

    beforeEach(() => {
        initialState = fromReducer.initialState;
    });

    describe('fetchSeasons actions', () => {
        it('handles fetchSeasons action properly', () => {
            action = { type: LEAGUE_ACTIONS.FETCH_SEASONS };
            const state = fromReducer.leagueReducer(initialState, action);
            const expectedState: LeagueStateInfo = {
                ...initialState,
                seasons: {
                    ...initialState.seasons,
                    isLoading: true,
                    error: false
                }
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchSeasonsFail action properly', () => {
            action = { type: LEAGUE_ACTIONS.FETCH_SEASONS_FAIL };
            const state = fromReducer.leagueReducer(initialState, action);
            const expectedState: LeagueStateInfo = {
                ...initialState,
                seasons: {
                    ...initialState.seasons,
                    isLoading: false,
                    error: true
                }
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchSeasonsSuccess action properly', () => {
            const response = TEST_SEASONS_RESPONSE;
            action = {
                type: LEAGUE_ACTIONS.FETCH_SEASONS_SUCCESS,
                response
            };
            const state = fromReducer.leagueReducer(initialState, action);
            const expectedState: LeagueStateInfo = {
                ...initialState,
                seasons: {
                    ...initialState.seasons,
                    available: response.response,
                    isLoading: false
                }
            };
            expect(state).toEqual(expectedState);
        });
    });

    describe('fetchLeagues actions', () => {
        it('handles fetchLeagues action properly', () => {
            const season = 2021;
            const queryParams = { season };
            action = { type: LEAGUE_ACTIONS.FETCH_LEAGUES, queryParams };
            const state = fromReducer.leagueReducer(initialState, action);

            const expectedState: LeagueStateInfo = {
                ...initialState,
                leagues: {
                    ...initialState.leagues,
                    isLoading: true,
                    error: false
                }
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchLeaguesFail action properly', () => {
            action = { type: LEAGUE_ACTIONS.FETCH_LEAGUES_FAIL };
            const state = fromReducer.leagueReducer(initialState, action);
            const expectedState: LeagueStateInfo = {
                ...initialState,
                leagues: {
                    ...initialState.leagues,
                    isLoading: false,
                    error: true
                }
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchLeaguesSuccess action properly', () => {
            const response = TEST_LEAGUES_RESPONSE;
            action = {
                type: LEAGUE_ACTIONS.FETCH_LEAGUES_SUCCESS,
                response
            };
            const state = fromReducer.leagueReducer(initialState, action);
            const expectedState: LeagueStateInfo = {
                ...initialState,
                countries: {
                    ...initialState.countries,
                    available: COUNTRIES,
                },
                leagues: {
                    ...initialState.leagues,
                    available: response.response,
                    isLoading: false
                }
            };
            expect(state).toEqual(expectedState);
        });
    });


    it('handles selectSeason action properly', () => {
        const season = '2021';
        const available = TEST_SEASONS_RESPONSE.response;
        action = {
            type: LEAGUE_ACTIONS.SELECT_SEASON,
            season
        };

        initialState = {
            ...initialState,
            seasons: {
                ...initialState.seasons,
                available
            }
        };

        const state = fromReducer.leagueReducer(initialState, action);
        const expectedState: LeagueStateInfo = {
            ...initialState,
            seasons: {
                ...initialState.seasons,
                selected: 2021
            }
        };
        expect(state).toEqual(expectedState);
    });

    it('handles selectLeague action properly', () => {
        const league = '39';
        const available = TEST_LEAGUES_RESPONSE.response;
        action = {
            type: LEAGUE_ACTIONS.SELECT_LEAGUE,
            league
        };

        initialState = {
            ...initialState,
            leagues: {
                ...initialState.leagues,
                available
            }
        };

        const state = fromReducer.leagueReducer(initialState, action);
        const expectedState: LeagueStateInfo = {
            ...initialState,
            leagues: {
                ...initialState.leagues,
                selected: 39
            }
        };
        expect(state).toEqual(expectedState);
    });

    it('handles selectCountry action properly', () => {
        const country = 'England';

        const available = COUNTRIES;
        action = {
            type: LEAGUE_ACTIONS.SELECT_COUNTRY,
            country
        };

        initialState = {
            ...initialState,
            countries: {
                ...initialState.countries,
                available
            }
        };

        const state = fromReducer.leagueReducer(initialState, action);
        const expectedState: LeagueStateInfo = {
            ...initialState,
            countries: {
                ...initialState.countries,
                selected: country
            }
        };
        expect(state).toEqual(expectedState);
    });
});
