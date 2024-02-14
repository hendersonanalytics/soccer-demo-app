import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandingsQueryParams } from '../models/standings-query-params.interface';
import { apiConfig } from 'src/app/configs/api.config';
import { FootballApiStandingsResponse } from '../models/football-api-standings-response.interface';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private httpClient: HttpClient) {}

  public fetchStandings(queryParams: StandingsQueryParams) {
    const url = `${apiConfig.baseUrl}${apiConfig.standings}`;
    const params = this.getHttpParams(queryParams);
    return this.httpClient.get<FootballApiStandingsResponse>(url, {params});
  }

  private getHttpParams(queryParams: StandingsQueryParams): HttpParams {
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
