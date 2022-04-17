/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';


import { TeamService } from '../services/team.service';
import { teamActions } from './team.actions';

@Injectable()
export class TeamEffects {
    fetchTeams$ = createEffect(() => {
        return this.action$.pipe(
            ofType(teamActions.fetchTeams),
            concatMap((action) => {
                const { queryParams } = action;
                return this.teamService.fetchTeams(queryParams).pipe(
                    map(response => teamActions.fetchTeamsSuccess({response})),
                    catchError(() => of(teamActions.fetchTeamsFail()))
                );
            })
        );
    });

    constructor(
        private teamService: TeamService,
        private action$: Actions
    ) {}
}
