import { LeagueLimitedInfo, TeamLimitedInfo } from '../../players/models/football-api-players-response-info.interface';

export interface FootballApiStandingsResponseInfo {
    league: StandingsResponseLeagueInfo;
}

export interface StandingsResponseLeagueInfo extends LeagueLimitedInfo{
    standings: Array<StandingsResponseRankingInfo[]>;
}

export interface StandingsResponseRankingInfo {
    rank: number;
    team: TeamLimitedInfo;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    description: string;
    all: StandingsResponseResultsInfo;
    home: StandingsResponseResultsInfo;
    away: StandingsResponseResultsInfo;
    update: string; // formatted like 2024-02-11T00:00:00+00:00
}

export interface StandingsResponseResultsInfo {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: StandingsResponseGoalsInfo;
}

export interface StandingsResponseGoalsInfo {
    for: number;
    against: number;
}

export interface FlattenedStandingsInfo {
    rank: number,
    team: string,
    gamesPlayed: number,
    won: number;
    drawn: number;
    lost: number;
    form: string,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number,
    points: number,
}
