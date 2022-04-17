import { FootballApiResponseCoreMetadata } from '../../core/models/football-api-response-core-metadata.interface';
import { FootballApiTeamsResponseInfo } from './football-api-teams-response-info.interface';

export interface FootballApiTeamsResponse extends FootballApiResponseCoreMetadata {
    response: FootballApiTeamsResponseInfo[];
}
