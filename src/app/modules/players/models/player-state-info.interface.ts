import { FootballApiPlayersResponseInfo } from './football-api-players-response-info.interface';

export interface PlayerStateInfo {
    available: FootballApiPlayersResponseInfo[];
    nextPageNumber: number;
    morePlayersAreAvailable: boolean;
    selected: number;
    paging: {
        current: number;
        total: number;
    };
    isLoading: boolean;
    error: boolean;
}
