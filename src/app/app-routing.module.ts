import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LeagueListPageComponent } from './components/league-list-page/league-list.page';
import { PlayerListPageComponent } from './components/player-list-page/player-list-page.component';
import { TeamListPageComponent } from './components/team-list-page/team-list-page.component';
import { LeagueSeasonTeamGuard } from './modules/core/guards/league-season-team.guard';
import { LeagueSeasonGuard } from './modules/core/guards/league-season.guard';
import { PlayerDetailPageComponent } from './components/player-detail-page/player-detail-page.component';
import { PlayerGuard } from './modules/core/guards/player.guard';
import { TeamGuard } from './modules/core/guards/team.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LeagueListPageComponent
  },
  {
    path: 'teams',
    component: TeamListPageComponent,
    canActivate: [LeagueSeasonGuard]
  },
  {
    path: 'team-details',
    component: PlayerListPageComponent,
    canActivate: [LeagueSeasonGuard, TeamGuard]
  },
  {
    path: 'player-details',
    component: PlayerDetailPageComponent,
    canActivate: [LeagueSeasonGuard, TeamGuard, PlayerGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
