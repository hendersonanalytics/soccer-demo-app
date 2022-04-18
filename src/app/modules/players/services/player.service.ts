import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { PlayerQueryParams } from '../models/player-query-params.interface';
import { apiConfig } from 'src/app/configs/api.config';
import { FootballApiPlayersResponse } from '../models/football-api-players-response.interface';

@Injectable({ providedIn: 'root' })
export class PlayerService {
    constructor(private httpClient: HttpClient) {}

    public fetchPlayers(queryParams: PlayerQueryParams) {
        const url = `${apiConfig.baseUrl}${apiConfig.players}`;
        const params = this.getHttpParams(queryParams);
        return this.httpClient.get<FootballApiPlayersResponse>(url, {params});
    }

    private getHttpParams(queryParams: PlayerQueryParams): HttpParams {
        let httpParams = new HttpParams();
        const leagueParamName = 'league';
        const LEAGUE_ID = 'leagueId';
        const teamParamName = 'team';
        const TEAM_ID = 'teamId';

        Object.keys(queryParams).sort().forEach(key => {
            switch (key) {
                case 'season':
                    httpParams = httpParams.append(key, queryParams[key]);
                    break;
                case 'page':
                    httpParams = httpParams.append(key, queryParams[key]);
                    break;
                case LEAGUE_ID:
                    httpParams = httpParams.append(leagueParamName, queryParams[LEAGUE_ID]);
                    break;
                case TEAM_ID:
                    httpParams = httpParams.append(teamParamName, queryParams[TEAM_ID]);
                    break;
                default:
                    break;
            }
        });

        return httpParams;
    }
}
