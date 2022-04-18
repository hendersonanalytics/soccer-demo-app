/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { FootballApiTeamsResponseInfo } from '../models/football-api-teams-response-info.interface';
import { TeamQueryParams } from '../models/team-query-params.interface';
import { teamActions } from '../state/team.actions';
import { TeamState } from '../state/team.reducer';
import { teamSelectors } from '../state/team.selectors';

@Injectable({ providedIn: 'root' })
export class TeamFacade {
    public isLoading$: Observable<boolean> = this.store.select(teamSelectors.selectIsLoading);
    public teams$: Observable<FootballApiTeamsResponseInfo[]> = this.store.select(teamSelectors.selectTeams);
    public hasError$: Observable<boolean> = this.store.select(teamSelectors.selectError);
    public selectedTeam$: Observable<number> = this.store.select(teamSelectors.selectSelectedTeam);
    public selectedTeamInfo$ = this.selectedTeam$.pipe(
        filter(teamId => Boolean(teamId) === true),
        switchMap(teamId => {
            return this.teams$.pipe(
                map(teams => teams.find(team => team.team.id === teamId)),
                catchError(() => of(null))
            );
        })
    );

    constructor(private store: Store<TeamState>) {}

    fetchTeams(queryParams: TeamQueryParams): void {
        this.store.dispatch(teamActions.fetchTeams({queryParams}));
    }

    selectTeam(teamId: number): void {
        this.store.dispatch(teamActions.selectTeam({teamId}));
    }
}
