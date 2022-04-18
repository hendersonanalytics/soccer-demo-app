import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import * as fromReducer from './team.reducer';
import { teamActions } from './team.actions';
import { TeamService } from '../services/team.service';
import { TeamEffects } from './team.effects';
import { TEST_TEAMS_RESPONSE } from 'src/app/support/data/test-teams-response';
import { TEAM_ACTIONS } from '../enums/team-actions.enum';
import { LEAGUE_ACTIONS } from '../../leagues/enums/league-actions.enum';
import { leagueActions } from '../../leagues/state/league.actions';
import { LeagueFacade } from '../../leagues/facades/league.facade';

describe('TeamEffects', () => {
    let effects: TeamEffects;
    let actions$: Observable<any>;
    let teamService: TeamService;

    const teamServiceSpy = jasmine.createSpyObj(teamService, ['fetchTeams']);
    const leagueFacadeMock = {
        selectedSeason$: of(2021)
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockActions(() => actions$),
                provideMockStore({ initialState: fromReducer.initialState }),
                TeamEffects,
                { provide: TeamService, useValue: teamServiceSpy },
                { provide: LeagueFacade, useValue: leagueFacadeMock }
            ]
        });

        effects = TestBed.inject(TeamEffects);
        teamServiceSpy.fetchTeams.and.returnValue(of(TEST_TEAMS_RESPONSE));
    });

    afterEach(() => {
        teamServiceSpy.fetchTeams.calls.reset();
    });

    describe('fetchTeams$', () => {
        const season = 2021;
        const leagueId = 39;
        const queryParams = { season, leagueId };
        const ACTION_ARG = {
            type: TEAM_ACTIONS.FETCH_TEAMS,
            queryParams
        };

        it('returns the expected action when api call is successful', fakeAsync(() => {
            const expectedArg = { response: TEST_TEAMS_RESPONSE };
            actions$ = of(teamActions.fetchTeams(ACTION_ARG));
            effects.fetchTeams$.subscribe((result) => {
                expect(result).toEqual(teamActions.fetchTeamsSuccess(expectedArg));
            });
            tick();
        }));

        it('returns the expected action when api call errors', fakeAsync(() => {
            teamServiceSpy.fetchTeams.and.returnValue(throwError(new Error()));
            actions$ = of(teamActions.fetchTeams(ACTION_ARG));
            effects.fetchTeams$.subscribe((result) => {
                expect(result).toEqual(teamActions.fetchTeamsFail());
            });
            tick();
        }));
    });

    describe('selectLeague$', () => {
        const season = 2021;
        const leagueId = 39;
        const queryParams = { season, leagueId };
        const ACTION_ARG = {
            type: LEAGUE_ACTIONS.SELECT_LEAGUE,
            league: leagueId
        };

        it('returns the expected action', fakeAsync(() => {
            actions$ = of(leagueActions.selectLeague(ACTION_ARG));
            effects.selectLeague$.subscribe((result) => {
                expect(result).toEqual(teamActions.fetchTeams({ queryParams }));
            });
            tick();
        }));
    });
});
