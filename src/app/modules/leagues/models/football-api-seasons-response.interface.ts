import { FootballApiResponseCoreMetadata } from '../../core/models/football-api-response-core-metadata.interface';

export interface FootballApiSeasonsResponse extends FootballApiResponseCoreMetadata {
    response: number[];
}
