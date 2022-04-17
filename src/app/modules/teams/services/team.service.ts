

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { TeamQueryParams } from '../models/team-query-params.interface';
import { apiConfig } from 'src/app/configs/api.config';
import { FootballApiTeamsResponse } from '../models/football-api-teams-response.interface';

@Injectable()
export class TeamService {
    constructor(private httpClient: HttpClient) {}

    public fetchTeams(queryParams: TeamQueryParams) {
        const url = `${apiConfig.baseUrl}${apiConfig.teams}`;
        const params = this.getHttpParams(queryParams);
        return this.httpClient.get<FootballApiTeamsResponse>(url, {params});
    }

    private getHttpParams(queryParams: TeamQueryParams): HttpParams {
        let httpParams = new HttpParams();
        const leagueParamName = 'league';
        const LEAGUE_ID = 'leagueId';
        const countryParamName = 'country';
        const COUNTRY_NAME = 'countryName';

        Object.keys(queryParams).sort().forEach(key => {
            switch (key) {
                case 'season':
                    httpParams = httpParams.append(key, queryParams[key]);
                    break;
                case LEAGUE_ID:
                    httpParams = httpParams.append(leagueParamName, queryParams[LEAGUE_ID]);
                    break;
                case COUNTRY_NAME:
                    httpParams = httpParams.append(countryParamName, queryParams[COUNTRY_NAME]);
                    break;
                default:
                    break;
            }
        });

        return httpParams;
    }
}
