/* eslint-disable @typescript-eslint/no-unused-expressions */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { apiConfig } from 'src/app/configs/api.config';
import { TEST_LEAGUES_RESPONSE } from 'src/app/support/data/test-leagues-response';
import { TEST_SEASONS_RESPONSE } from 'src/app/support/data/test-seasons-response';
import { LeagueService } from './league.service';

describe('LeagueService', () => {
    let leagueService: LeagueService;
    let httpTestingController: HttpTestingController;

    const API_ERR_MSG = 'api-error';
    const apiErrorObj = { message: API_ERR_MSG };
    const statusText = API_ERR_MSG;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule], // subs in the HttpClient methods we need
            providers: [LeagueService]
        });

        leagueService = TestBed.inject(LeagueService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    describe('fetchSeasons', () => {
        const URL = `${apiConfig.baseUrl}${apiConfig.seasons}`;
        it('returns the expected payload when called', () => {
            leagueService.fetchSeasons().subscribe(seasons => {
                expect(seasons).toEqual(TEST_SEASONS_RESPONSE);
            });

            const req = httpTestingController.expectOne(URL);
            req.flush(TEST_SEASONS_RESPONSE);
            expect(req.request.method).toBe('GET');
            httpTestingController.verify();
        });

        it('throws the expected error when the api returns an error', () => {
            leagueService.fetchSeasons().subscribe(
                () => { },
                (err) => {
                    expect(err.error.message).toBe(API_ERR_MSG);
                    expect(err.status).toBe(500);
                }
            );

            const req = httpTestingController.expectOne(URL);
            req.flush(apiErrorObj, { status: 500, statusText });
            httpTestingController.verify();
        });
    });

    describe('fetchLeagues', () => {
        const season = 2021;
        const URL = `${apiConfig.baseUrl}${apiConfig.leagues}?season=${season}`;
        it('returns the expected payload when called', () => {
            leagueService.fetchLeagues({ season }).subscribe(leagues => {
                expect(leagues).toEqual(TEST_LEAGUES_RESPONSE);
            });

            const req = httpTestingController.expectOne(URL);
            req.flush(TEST_LEAGUES_RESPONSE);
            expect(req.request.method).toBe('GET');
            expect(req.request.params.has('season')).toBe(true);
            expect(req.request.params.get('season')).toBe(season.toString());
            httpTestingController.verify();
        });

        it('throws the expected error when the api returns an error', () => {
            leagueService.fetchLeagues({ season }).subscribe(
                () => { },
                (err) => {
                    expect(err.error.message).toBe(API_ERR_MSG);
                    expect(err.status).toBe(500);
                }
            );

            const req = httpTestingController.expectOne(URL);
            req.flush(apiErrorObj, { status: 500, statusText });
            httpTestingController.verify();
        });
    });
});
