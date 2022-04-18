import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamListPageComponent } from './team-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: TeamListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamListRoutingModule {}
