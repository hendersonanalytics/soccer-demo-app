import { TeamResponseTeamInfo } from './team-response-team-info.interface';
import { TeamResponseVenueInfo } from './team-response-venue-info.interface';

export interface FootballApiTeamsResponseInfo {
    team: TeamResponseTeamInfo;
    venue: TeamResponseVenueInfo;
}
