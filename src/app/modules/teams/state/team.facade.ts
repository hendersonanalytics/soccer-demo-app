import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TeamQueryParams } from '../models/team-query-params.interface';
import { teamActions } from './team.actions';
import { TeamState } from './team.reducer';

@Injectable({ providedIn: 'root' })
export class TeamFacade {
    constructor(private store: Store<TeamState>) {}

    fetchLeagues(queryParams: TeamQueryParams): void {
        this.store.dispatch(teamActions.fetchTeams({queryParams}));
    }
}
