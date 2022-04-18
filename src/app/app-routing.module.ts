import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlayerListPageComponent } from './modules/players/components/player-list-page/player-list-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'teams',
  //   component: TeamListPageComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'teams',
    loadChildren: () => import('./modules/teams/components/team-list-page/team-list.module').then( m => m.TeamListPageModule),
    pathMatch: 'full'
  },
  {
    path: 'team-details',
    component: PlayerListPageComponent,
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
