import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LeagueListPageComponent } from './components/league-list-page/league-list.page';
import { PlayerListPageComponent } from './components/player-list-page/player-list-page.component';
import { TeamListPageComponent } from './components/team-list-page/team-list-page.component';
import { PlayerDetailPageComponent } from './components/player-detail-page/player-detail-page.component';
import { LeagueOptionsPageComponent } from './components/league-options-page/league-options-page.component';
import { LeagueStandingsPageComponent } from './components/league-standings-page/league-standings-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: LeagueListPageComponent
  },
  {
    path: 'league-options',
    component: LeagueOptionsPageComponent,
  },
  {
    path: 'teams',
    component: TeamListPageComponent,
  },
  {
    path: 'standings',
    component: LeagueStandingsPageComponent,
  },
  {
    path: 'team-details',
    component: PlayerListPageComponent,
  },
  {
    path: 'player-details',
    component: PlayerDetailPageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
