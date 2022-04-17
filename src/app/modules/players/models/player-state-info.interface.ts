import { FootballApiPlayersResponseInfo } from './football-api-players-response-info.interface';

export interface PlayerStateInfo {
    available: FootballApiPlayersResponseInfo[];
    nextPageNumber: number;
    morePlayersAreAvailable: boolean;
    paging: {
        current: number;
        total: number;
    };
    isLoading: boolean;
    error: boolean;
}
