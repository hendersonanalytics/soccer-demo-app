import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import * as fromReducer from './player.reducer';
import { playerActions } from './player.actions';
import { PLAYER_ACTIONS } from '../enums/player-actions.enum';
import { PlayerService } from '../services/player.service';
import { PlayerEffects } from './player.effects';
import { TEST_PLAYERS_RESPONSE } from 'src/app/support/data/test-players-response';
import { TEST_PLAYERS_RESPONSE_PAGE_3 } from 'src/app/support/data/test-players-response-page-3';
import { TEAM_ACTIONS } from '../../teams/enums/team-actions.enum';
import { teamActions } from '../../teams/state/team.actions';
import { LeagueFacade } from '../../leagues/facades/league.facade';
import { TeamFacade } from '../../teams/facades/team.facade';
import { PlayerFacade } from '../facades/player.facade';

describe('PlayerEffects', () => {
    let effects: PlayerEffects;
    let actions$: Observable<any>;
    let playerService: PlayerService;

    const season = 2021;
    const teamId = 42;
    const leagueId = 39;
    const nextPageNumber = 3;
    const playerServiceSpy = jasmine.createSpyObj(playerService, ['fetchPlayers']);

    const leagueFacadeMock = {
        selectedSeason$: of(season),
        selectedLeague$: of(leagueId)
    };

    const teamFacadeMock = {
        selectedTeam$: of(teamId)
    };

    const playerFacadeMock = {
        nextPageNumber$: of(nextPageNumber)
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockActions(() => actions$),
                provideMockStore({ initialState: fromReducer.initialState }),
                PlayerEffects,
                {  provide: PlayerService, useValue: playerServiceSpy },
                {  provide: PlayerFacade, useValue: playerFacadeMock },
                {  provide: LeagueFacade, useValue: leagueFacadeMock },
                {  provide: TeamFacade, useValue: teamFacadeMock },
            ]
        });

        effects = TestBed.inject(PlayerEffects);
        playerServiceSpy.fetchPlayers.and.returnValue(of(TEST_PLAYERS_RESPONSE));
    });

    afterEach(() => {
        playerServiceSpy.fetchPlayers.calls.reset();
    });

    describe('fetchPlayers$', () => {
        const queryParams = { season, teamId, leagueId };
        const expectedArg = { response: TEST_PLAYERS_RESPONSE };

        describe('playerActions.fetchPlayers action', () => {
            const ACTION_ARG = {
                type: PLAYER_ACTIONS.FETCH_PLAYERS,
                queryParams
            };

            it('returns the expected action when api call is successful', fakeAsync(() => {
                actions$ = of(playerActions.fetchPlayers(ACTION_ARG));
                effects.fetchPlayers$.subscribe((result) => {
                    expect(result).toEqual(playerActions.fetchPlayersSuccess(expectedArg));
                    expect(playerServiceSpy.fetchPlayers).toHaveBeenCalledOnceWith(queryParams);
                });
                tick();
            }));

            it('returns the expected action when api call errors', fakeAsync(() => {
                playerServiceSpy.fetchPlayers.and.returnValue(throwError(new Error()));
                actions$ = of(playerActions.fetchPlayers(ACTION_ARG));
                effects.fetchPlayers$.subscribe((result) => {
                    expect(result).toEqual(playerActions.fetchPlayersFail());
                    expect(playerServiceSpy.fetchPlayers).toHaveBeenCalledOnceWith(queryParams);
                });
                tick();
            }));
        });

        describe('playerActions.resetPlayers action', () => {
            const ACTION_ARG = {
                type: PLAYER_ACTIONS.RESET_PLAYERS,
                queryParams
            };

            it('returns the expected action when api call is successful', fakeAsync(() => {
                actions$ = of(playerActions.fetchPlayers(ACTION_ARG));
                effects.fetchPlayers$.subscribe((result) => {
                    expect(result).toEqual(playerActions.fetchPlayersSuccess(expectedArg));
                    expect(playerServiceSpy.fetchPlayers).toHaveBeenCalledOnceWith(queryParams);
                });
                tick();
            }));

            it('returns the expected action when api call errors', fakeAsync(() => {
                playerServiceSpy.fetchPlayers.and.returnValue(throwError(new Error()));
                actions$ = of(playerActions.resetPlayers(ACTION_ARG));
                effects.fetchPlayers$.subscribe((result) => {
                    expect(result).toEqual(playerActions.fetchPlayersFail());
                    expect(playerServiceSpy.fetchPlayers).toHaveBeenCalledOnceWith(queryParams);
                });
                tick();
            }));
        });
    });

    describe('appendPlayers$', () => {
        const page = nextPageNumber;
        const queryParams = { season, teamId, page, leagueId };

        it('returns the expected action when api call is successful', fakeAsync(() => {
            playerServiceSpy.fetchPlayers.and.returnValue(of(TEST_PLAYERS_RESPONSE_PAGE_3));
            const expectedArg = { response: TEST_PLAYERS_RESPONSE_PAGE_3 };
            actions$ = of(playerActions.appendPlayers);
            effects.appendPlayers$.subscribe((result) => {
                expect(result).toEqual(playerActions.appendPlayersSuccess(expectedArg));
                expect(playerServiceSpy.fetchPlayers).toHaveBeenCalledOnceWith(queryParams);
            });
            tick();
        }));

        it('returns the expected action when api call errors', fakeAsync(() => {
            playerServiceSpy.fetchPlayers.and.returnValue(throwError(new Error()));
            actions$ = of(playerActions.appendPlayers);
            effects.appendPlayers$.subscribe((result) => {
                expect(result).toEqual(playerActions.appendPlayersFail());
            });
            tick();
        }));
    });

    describe('selectTeam$', () => {
        const queryParams = { season, teamId, leagueId };
        const ACTION_ARG = {
            type: TEAM_ACTIONS.SELECT_TEAM,
            teamId
        };

        it('returns the expected action', fakeAsync(() => {
            actions$ = of(teamActions.selectTeam(ACTION_ARG));
            effects.selectTeam$.subscribe((result) => {
                expect(result).toEqual(playerActions.resetPlayers({ queryParams }));
            });
            tick();
        }));
    });
});
