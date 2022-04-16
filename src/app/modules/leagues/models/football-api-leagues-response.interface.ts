/* eslint-disable @typescript-eslint/naming-convention */
import { FootballApiResponseCoreMetadata } from '../../core/models/football-api-response-core-metadata.interface';

interface LeagueResponseLeagueInfo {
    id: number;
    name: string;
    type: string;
    logo: string;
}

interface LeagueResponseCountryInfo {
    name: string;
    code: string;
    flag: string;
}

interface LeagueResponseCoverageInfo {
    fixtures: LeagueResponseFixtureInfo;
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
}

interface LeagueResponseFixtureInfo {
    events: boolean;
    lineups: boolean;
    statistics_fixtures: boolean;
    statistics_players: boolean;
}

interface LeagueResponseSeasonsInfo {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: LeagueResponseCoverageInfo;
}

interface FootballApiLeaguesResponseInfo {
    league: LeagueResponseLeagueInfo;
    country: LeagueResponseCountryInfo;
    seasons: LeagueResponseSeasonsInfo[];
}


export interface FootballApiLeaguesResponse extends FootballApiResponseCoreMetadata {
    response: FootballApiLeaguesResponseInfo[];
}
