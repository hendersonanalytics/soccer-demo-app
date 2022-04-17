/* eslint-disable @typescript-eslint/naming-convention */
import { FootballApiResponseCoreMetadata } from '../../core/models/football-api-response-core-metadata.interface';
import { FootballApiLeaguesResponseInfo } from './football-api-leagues-response-info.interface';

export interface FootballApiLeaguesResponse extends FootballApiResponseCoreMetadata {
    response: FootballApiLeaguesResponseInfo[];
}
