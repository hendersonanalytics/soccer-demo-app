import { FootballApiLeaguesResponseInfo } from './football-api-leagues-response-info.interface';

interface LeagueSeasonInfo {
    available: number[];
    selected: number;
    error: boolean;
    isLoading: boolean;
}

interface LeagueCountryInfo {
    available: string[];
    selected: string; // country name
}

interface LeagueLeagueInfo {
    available: FootballApiLeaguesResponseInfo[];
    selected: number; // league id
    error: boolean;
    isLoading: boolean;
}

export interface LeagueStateInfo {
    seasons: LeagueSeasonInfo;
    countries: LeagueCountryInfo;
    leagues: LeagueLeagueInfo;
}
