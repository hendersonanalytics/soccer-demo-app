/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, filter, map, withLatestFrom } from 'rxjs/operators';
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
        /*
        had to hack this with filter since distinctUntilChanged didn't work how I expected. need to get to
        the bottom of why the behavior was different
        see https://stackoverflow.com/questions/54856654/rxjs-distinctuntilchanged-appears-to-not-be-working
        */
        let prevLeague: number;
        let prevSeason: number;
        return this.action$.pipe(
            ofType(leagueActions.selectLeague),
            concatMap((action) => of(action).pipe(
                withLatestFrom(this.leagueFacade.selectedSeason$),
                filter(([pipedAction, season]) => {
                    return season !== prevSeason || pipedAction.league !== prevLeague;
                }),
                map(([pipedAction, season]) => {
                    const { league: leagueId } = pipedAction;
                    const queryParams = { leagueId, season };
                    prevLeague = leagueId;
                    prevSeason = season;
                    return teamActions.fetchTeams({queryParams});
                })
            ))
        );
    });

    constructor(
        private teamService: TeamService,
        private leagueFacade: LeagueFacade,
        private action$: Actions
    ) {}
}
