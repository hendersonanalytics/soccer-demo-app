import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TeamListPageComponent } from './team-list-page.component';
import { TeamListRoutingModule } from './team-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamListRoutingModule
  ],
  declarations: [TeamListPageComponent]
})
export class TeamListPageModule {}
