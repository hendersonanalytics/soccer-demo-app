import { LeagueResponseCountryInfo } from './league-response-country-info.interface';
import { LeagueResponseLeagueInfo } from './league-response-league-info.interface';
import { LeagueResponseSeasonsInfo } from './league-response-seasons-info.interface';

export interface FootballApiLeaguesResponseInfo {
    league: LeagueResponseLeagueInfo;
    country: LeagueResponseCountryInfo;
    seasons: LeagueResponseSeasonsInfo[];
}
