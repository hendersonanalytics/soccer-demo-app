import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerListPageComponent } from './player-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerListRoutingModule {}
