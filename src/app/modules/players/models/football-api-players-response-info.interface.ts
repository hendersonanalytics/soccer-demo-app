import { PlayerResponsePlayerInfo } from './player-response-player-info.interface';

export interface FootballApiPlayersResponseInfo {
    player: PlayerResponsePlayerInfo;
    statistics: FootballApiPlayerStatsInfo[];
}

export interface FootballApiPlayerStatsInfo {
    team: TeamLimitedInfo;
    league: LeagueLimitedInfo;
    games: PlayerStatsGamesInfo;
    shots: PlayerStatsShotsInfo;
    goals: PlayerStatsGoalsInfo;
    passes: PlayerStatsPassesInfo;
    tackles: PlayerStatsTacklesInfo;
    cards: PlayerStatsCardsInfo;
}

export interface TeamLimitedInfo {
    id: number;
    name: string;
    logo: string;
}

export interface LeagueLimitedInfo {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
}

export interface PlayerStatsGamesInfo {
    appearences: number;
    lineups: number;
    minutes: number;
    number: number;
    position: string;
    rating: string;
    captain: boolean;
}

export interface PlayerStatsShotsInfo {
    total: number;
    on: number;
}

export interface PlayerStatsGoalsInfo {
    total: number;
    conceded: number;
    assists: number;
    saves: number;
}

export interface PlayerStatsPassesInfo {
    total: number;
    key: number;
    accuracy: number;
}

export interface PlayerStatsTacklesInfo {
    total: number;
    blocks: number;
    interceptions: number;
}

export interface PlayerStatsCardsInfo {
    yellow: number;
    yellowred: number;
    red: number;
}

// {
//     team: {
//         id: 42,
//         name: 'Arsenal',
//         logo: 'https://media.api-sports.io/football/teams/42.png'
//     },
//     league: {
//         id: 39,
//         name: 'Premier League',
//         country: 'England',
//         logo: 'https://media.api-sports.io/football/leagues/39.png',
//         flag: 'https://media.api-sports.io/flags/gb.svg',
//         season: 2021
//     },
//     games: {
//         appearences: 0,
//         lineups: 0,
//         minutes: 0,
//         number: null,
//         position: 'Goalkeeper',
//         rating: null,
//         captain: false
//     },
//     substitutes: {
//         in: 0,
//         out: 0,
//         bench: 0
//     },
//     shots: {
//         total: null,
//         on: null
//     },
//     goals: {
//         total: 0,
//         conceded: null,
//         assists: null,
//         saves: null
//     },
//     passes: {
//         total: null,
//         key: null,
//         accuracy: null
//     },
//     tackles: {
//         total: null,
//         blocks: null,
//         interceptions: null
//     },
//     duels: {
//         total: null,
//         won: null
//     },
//     dribbles: {
//         attempts: null,
//         success: null,
//         past: null
//     },
//     fouls: {
//         drawn: null,
//         committed: null
//     },
//     cards: {
//         yellow: 0,
//         yellowred: 0,
//         red: 0
//     },
//     penalty: {
//         won: null,
//         commited: null,
//         scored: null,
//         missed: null,
//         saved: null
//     }
// }