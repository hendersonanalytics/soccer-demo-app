/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, filter, map, withLatestFrom } from 'rxjs/operators';

import { LeagueFacade } from '../../leagues/facades/league.facade';
import { TeamFacade } from '../../teams/facades/team.facade';
import { teamActions } from '../../teams/state/team.actions';
import { PlayerFacade } from '../facades/player.facade';

import { PlayerService } from '../services/player.service';
import { playerActions } from './player.actions';

@Injectable()
export class PlayerEffects {
    fetchPlayers$ = createEffect(() => {
        return this.action$.pipe(
            ofType(
                playerActions.fetchPlayers,
                playerActions.resetPlayers,
            ),
            concatMap((action) => {
                const { queryParams } = action;
                return this.playerService.fetchPlayers(queryParams).pipe(
                    map(response => playerActions.fetchPlayersSuccess({response})),
                    catchError(() => of(playerActions.fetchPlayersFail()))
                );
            })
        );
    });

    appendPlayers$ = createEffect(() => {
        return this.action$.pipe(
            ofType(playerActions.appendPlayers),
            concatMap((action) => {
                return of(action).pipe(
                    withLatestFrom(
                        this.leagueFacade.selectedSeason$,
                        this.leagueFacade.selectedLeague$,
                        this.teamFacade.selectedTeam$,
                        this.playerFacade.nextPageNumber$
                    ),
                    concatMap(([_, season, leagueId, teamId, page]) => {
                        const queryParams = { season, leagueId, teamId, page };
                        return this.playerService.fetchPlayers(queryParams).pipe(
                            map(response => playerActions.appendPlayersSuccess({response})),
                            catchError(() => of(playerActions.appendPlayersFail()))
                        );
                    })
                );
            })
        );
    });

    // need to keep players in memory, no need to make another api call...
    selectTeam$ = createEffect(() => {
        let prevLeagueId: number;
        let prevTeamId: number;
        let prevSeason: number;
        return this.action$.pipe(
            ofType(teamActions.selectTeam),
            withLatestFrom(
                this.leagueFacade.selectedSeason$,
                this.leagueFacade.selectedLeague$
            ),
            filter(([action, season, leagueId]) => {
                return season !== prevSeason || leagueId !== prevLeagueId || action.teamId !== prevTeamId;
            }),
            map(([action, season, leagueId]) => {
                const { teamId } = action;
                const queryParams = { teamId, season, leagueId };
                prevSeason = season;
                prevLeagueId = leagueId;
                prevTeamId = teamId;
                return playerActions.resetPlayers({queryParams});
            })
        );
    });

    constructor(
        private playerService: PlayerService,
        private leagueFacade: LeagueFacade,
        private teamFacade: TeamFacade,
        private playerFacade: PlayerFacade,
        private action$: Actions
    ) {}
}
