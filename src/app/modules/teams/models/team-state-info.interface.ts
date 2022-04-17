import { FootballApiTeamsResponseInfo } from './football-api-teams-response-info.interface';

export interface TeamStateInfo {
    available: FootballApiTeamsResponseInfo[];
    selected: number;
    isLoading: boolean;
    error: boolean;
}
