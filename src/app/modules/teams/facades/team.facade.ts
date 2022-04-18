import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FootballApiTeamsResponseInfo } from '../models/football-api-teams-response-info.interface';
import { TeamQueryParams } from '../models/team-query-params.interface';
import { teamActions } from '../state/team.actions';
import { TeamState } from '../state/team.reducer';
import { teamSelectors } from '../state/team.selectors';

@Injectable({ providedIn: 'root' })
export class TeamFacade {
    public isLoading$: Observable<boolean> = this.store.select(teamSelectors.selectIsLoading);
    public players$: Observable<FootballApiTeamsResponseInfo[]> = this.store.select(teamSelectors.selectTeams);
    public hasError$: Observable<boolean> = this.store.select(teamSelectors.selectError);

    constructor(private store: Store<TeamState>) {}

    fetchLeagues(queryParams: TeamQueryParams): void {
        this.store.dispatch(teamActions.fetchTeams({queryParams}));
    }
}
