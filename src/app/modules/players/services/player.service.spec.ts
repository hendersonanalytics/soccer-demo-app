import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { apiConfig } from 'src/app/configs/api.config';
import { TEST_PLAYERS_RESPONSE } from 'src/app/support/data/test-players-response';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
    let playerService: PlayerService;
    let httpTestingController: HttpTestingController;

    const API_ERR_MSG = 'api-error';
    const apiErrorObj = { message: API_ERR_MSG };
    const statusText = API_ERR_MSG;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule], // subs in the HttpClient methods we need
            providers: [PlayerService]
        });

        playerService = TestBed.inject(PlayerService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    describe('fetchPlayers', () => {
        const season = 2021;
        const teamId = 42;
        const queryParams = { season, teamId };

        const URL = `${apiConfig.baseUrl}${apiConfig.players}?season=2021&team=42`;
        it('returns the expected payload when called', () => {
            playerService.fetchPlayers(queryParams).subscribe(players => {
                expect(players).toEqual(TEST_PLAYERS_RESPONSE);
            });

            const req = httpTestingController.expectOne(URL);
            req.flush(TEST_PLAYERS_RESPONSE);
            expect(req.request.method).toBe('GET');
            expect(req.request.params.has('season')).toBe(true);
            expect(req.request.params.get('season')).toBe(season.toString());
            expect(req.request.params.has('team')).toBe(true);
            expect(req.request.params.get('team')).toBe(teamId.toString());
            httpTestingController.verify();
        });

        it('throws the expected error when the api returns an error', () => {
            playerService.fetchPlayers(queryParams).subscribe(
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
