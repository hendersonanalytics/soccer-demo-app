/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { LeagueFacade } from '../../leagues/facades/league.facade';
import { leagueActions } from '../../leagues/state/league.actions';

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

    selectLeague$ = createEffect(() => {
        return this.action$.pipe(
            ofType(leagueActions.selectLeague),
            withLatestFrom(this.leagueFacade.selectedSeason$),
            map(([action, season]) => {
                const { league: leagueId } = action;
                const queryParams = { leagueId, season };
                return teamActions.fetchTeams({queryParams});
            })
        );
    });

    constructor(
        private teamService: TeamService,
        private leagueFacade: LeagueFacade,
        private action$: Actions
    ) {}
}
