import { TEST_TEAMS_RESPONSE } from 'src/app/support/data/test-teams-response';
import { TEAM_ACTIONS } from '../enums/team-actions.enum';
import { TeamStateInfo } from '../models/team-state-info.interface';
import * as fromReducer from './team.reducer';


describe('Team reducer', () => {
    let initialState: TeamStateInfo;
    let action: any;

    beforeEach(() => {
        initialState = fromReducer.initialState;
    });

    describe('fetchTeams actions', () => {
        it('handles fetchTeams action properly', () => {
            action = { type: TEAM_ACTIONS.FETCH_TEAMS };
            const state = fromReducer.teamReducer(initialState, action);
            const expectedState: TeamStateInfo = {
                ...initialState,
                isLoading: true,
                error: false
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchTeamsFail action properly', () => {
            action = { type: TEAM_ACTIONS.FETCH_TEAMS_FAIL };
            const state = fromReducer.teamReducer(initialState, action);
            const expectedState: TeamStateInfo = {
                ...initialState,
                isLoading: false,
                error: true
            };
            expect(state).toEqual(expectedState);
        });

        it('handles fetchTeamsSuccess action properly', () => {
            const response = TEST_TEAMS_RESPONSE;
            action = {
                type: TEAM_ACTIONS.FETCH_TEAMS_SUCCESS,
                response
            };
            const state = fromReducer.teamReducer(initialState, action);
            const expectedState: TeamStateInfo = {
                ...initialState,
                available: response.response,
                isLoading: false
            };
            expect(state).toEqual(expectedState);
        });
    });

    it('handles selectTeam action properly', () => {
        const teamId = 39;
        const available = TEST_TEAMS_RESPONSE.response;
        action = {
            type: TEAM_ACTIONS.SELECT_TEAM,
            teamId
        };

        initialState = { ...initialState, available };

        const state = fromReducer.teamReducer(initialState, action);
        const expectedState: TeamStateInfo = {
            ...initialState,
            selected: teamId

        };
        expect(state).toEqual(expectedState);
    });
});
