/* eslint-disable @typescript-eslint/naming-convention */
interface LeagueResponseFixtureInfo {
    events: boolean;
    lineups: boolean;
    statistics_fixtures: boolean;
    statistics_players: boolean;
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

export interface LeagueResponseSeasonsInfo {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: LeagueResponseCoverageInfo;
}
