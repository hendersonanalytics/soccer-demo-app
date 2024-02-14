import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import * as fromReducer from './standings.reducer';
import { standingsActions } from './standings.actions';
import { StandingsEffects } from './standings.effects';
import { StandingsService } from '../services/standings.service';
import { TEST_STANDINGS_RESPONSE } from 'src/app/support/data/test-standings-response';
import { STANDINGS_ACTIONS } from '../enums/standings-actions.enum';

describe('StandingsEffects', () => {
    let effects: StandingsEffects;
    let actions$: Observable<any>;
    let standingsService: jasmine.SpyObj<StandingsService>;

    beforeEach(() => {
        standingsService = jasmine.createSpyObj(StandingsService, ['fetchStandings']);

        TestBed.configureTestingModule({
            providers: [
                provideMockActions(() => actions$),
                provideMockStore({ initialState: fromReducer.initialState }),
                StandingsEffects,
                { provide: StandingsService, useValue: standingsService },

            ]
        });

        effects = TestBed.inject(StandingsEffects);
        standingsService.fetchStandings.and.returnValue(of(TEST_STANDINGS_RESPONSE));
    });

    describe('fetchStandings$', () => {
        const season = 2021;
        const leagueId = 39;
        const queryParams = { season, leagueId };
        const ACTION_ARG = {
            type: STANDINGS_ACTIONS.FETCH_STANDINGS,
            queryParams
        };

        it('returns the expected action when api call is successful', fakeAsync(() => {
            const expectedArg = { response: TEST_STANDINGS_RESPONSE };
            actions$ = of(standingsActions.fetchStandings(ACTION_ARG));
            effects.fetchStandings$.subscribe((result) => {
                expect(result).toEqual(standingsActions.fetchStandingsSuccess(expectedArg));
            });
            tick();
        }));

        it('returns the expected action when api call errors', fakeAsync(() => {
            standingsService.fetchStandings.and.returnValue(throwError(new Error()));
            actions$ = of(standingsActions.fetchStandings(ACTION_ARG));
            effects.fetchStandings$.subscribe((result) => {
                expect(result).toEqual(standingsActions.fetchStandingsFail());
            });
            tick();
        }));
    });
});
