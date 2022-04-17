import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LeagueService } from '../services/league.service';
import { LeagueEffects } from './league.effects';
import * as fromReducer from './league.reducer';
import { TEST_LEAGUES_RESPONSE } from 'src/app/support/data/test-leagues-response';
import { TEST_SEASONS_RESPONSE } from 'src/app/support/data/test-seasons-response';
import { leagueActions } from './league.actions';

describe('LeagueEffects', () => {
    let effects: LeagueEffects;
    let actions$: Observable<any>;
    let leagueService: LeagueService;

    const leagueServiceSpy = jasmine.createSpyObj(leagueService, ['fetchSeasons', 'fetchLeagues']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockActions(() => actions$),
                provideMockStore({ initialState: fromReducer.initialState }),
                LeagueEffects,
                {  provide: LeagueService, useValue: leagueServiceSpy }
            ]
        });

        effects = TestBed.inject(LeagueEffects);

        leagueServiceSpy.fetchLeagues.and.returnValue(of(TEST_LEAGUES_RESPONSE));
        leagueServiceSpy.fetchSeasons.and.returnValue(of(TEST_SEASONS_RESPONSE));
    });

    afterEach(() => {
        leagueServiceSpy.fetchLeagues.calls.reset();
        leagueServiceSpy.fetchSeasons.calls.reset();
    });

    describe('fetchSeasons$', () => {
        it('returns the expected action when api call is successful', fakeAsync(() => {
            const expectedArg = { response: TEST_SEASONS_RESPONSE };
            actions$ = of(leagueActions.fetchSeasons);
            effects.fetchSeasons$.subscribe((result) => {
                expect(result).toEqual(leagueActions.fetchSeasonsSuccess(expectedArg));
            });
            tick();
        }));

        it('returns the expected action when api call errors', fakeAsync(() => {
            leagueServiceSpy.fetchSeasons.and.returnValue(throwError(new Error()));
            actions$ = of(leagueActions.fetchSeasons);
            effects.fetchSeasons$.subscribe((result) => {
                expect(result).toEqual(leagueActions.fetchSeasonsFail());
            });
            tick();
        }));
    });

    describe('fetchLeagues$', () => {
        it('returns the expected action when api call is successful', fakeAsync(() => {
            const expectedArg = { response: TEST_LEAGUES_RESPONSE };
            actions$ = of(leagueActions.fetchLeagues);
            effects.fetchLeagues$.subscribe((result) => {
                expect(result).toEqual(leagueActions.fetchLeaguesSuccess(expectedArg));
            });
            tick();
        }));

        it('returns the expected action when api call errors', fakeAsync(() => {
            leagueServiceSpy.fetchLeagues.and.returnValue(throwError(new Error()));
            actions$ = of(leagueActions.fetchLeagues);
            effects.fetchLeagues$.subscribe((result) => {
                expect(result).toEqual(leagueActions.fetchLeaguesFail());
            });
            tick();
        }));
    });







});
