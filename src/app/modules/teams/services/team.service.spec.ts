/* eslint-disable @typescript-eslint/no-unused-expressions */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { apiConfig } from 'src/app/configs/api.config';
import { TEST_TEAMS_RESPONSE } from 'src/app/support/data/test-teams-response';
import { TeamService } from './team.service';

describe('TeamService', () => {
    let teamService: TeamService;
    let httpTestingController: HttpTestingController;

    const API_ERR_MSG = 'api-error';
    const apiErrorObj = { message: API_ERR_MSG };
    const statusText = API_ERR_MSG;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule], // subs in the HttpClient methods we need
            providers: [TeamService]
        });

        teamService = TestBed.inject(TeamService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    describe('fetchTeams', () => {
        const season = 2021;
        const leagueId = 39;
        const queryParams = { season, leagueId };


        const URL = `${apiConfig.baseUrl}${apiConfig.teams}?league=39&season=2021`;
        it('returns the expected payload when called', () => {
            teamService.fetchTeams(queryParams).subscribe(teams => {
                expect(teams).toEqual(TEST_TEAMS_RESPONSE);
            });

            const req = httpTestingController.expectOne(URL);
            req.flush(TEST_TEAMS_RESPONSE);
            expect(req.request.method).toBe('GET');
            expect(req.request.params.has('season')).toBe(true);
            expect(req.request.params.get('season')).toBe(season.toString());
            expect(req.request.params.has('league')).toBe(true);
            expect(req.request.params.get('league')).toBe(leagueId.toString());
            httpTestingController.verify();
        });

        it('throws the expected error when the api returns an error', () => {
            teamService.fetchTeams(queryParams).subscribe(
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
