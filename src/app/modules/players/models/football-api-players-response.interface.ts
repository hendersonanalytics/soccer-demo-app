import { FootballApiResponseCoreMetadata } from '../../core/models/football-api-response-core-metadata.interface';
import { FootballApiPlayersResponseInfo } from './football-api-players-response-info.interface';

export interface FootballApiPlayersResponse extends FootballApiResponseCoreMetadata {
    response: FootballApiPlayersResponseInfo[];
}
