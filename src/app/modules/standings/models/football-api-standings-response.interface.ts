import { FootballApiResponseCoreMetadata } from '../../core/models/football-api-response-core-metadata.interface';
import { FootballApiStandingsResponseInfo } from './football-api-standings-response-info.interface';

export interface FootballApiStandingsResponse extends FootballApiResponseCoreMetadata {
    response: FootballApiStandingsResponseInfo[];
}
