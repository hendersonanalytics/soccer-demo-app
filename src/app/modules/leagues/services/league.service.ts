import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { LeagueQueryParams } from '../models/league-query-params.interface';
import { apiConfig } from 'src/app/configs/api.config';
import { FootballApiSeasonsResponse } from '../models/football-api-seasons-response.interface';
import { FootballApiLeaguesResponse } from '../models/football-api-leagues-response.interface';

@Injectable()
export class LeagueService {
    constructor(private httpClient: HttpClient) {}

    public fetchSeasons() {
        const url = `${apiConfig.baseUrl}${apiConfig.seasons}`;
        return this.httpClient.get<FootballApiSeasonsResponse>(url);
    }

    public fetchLeagues(leagueQueryParams: LeagueQueryParams) {
        const url = `${apiConfig.baseUrl}${apiConfig.leagues}`;
        const params = this.getHttpParams(leagueQueryParams);
        return this.httpClient.get<FootballApiLeaguesResponse>(url, {params});
    }

    private getHttpParams(queryParams: LeagueQueryParams): HttpParams {
        let httpParams = new HttpParams();
        Object.keys(queryParams).forEach(key => {
            switch (key) {
                case 'season':
                    httpParams = httpParams.append(key, queryParams[key]);
                    break;
                default:
                    break;
            }
        });

        return httpParams;
    }
}
