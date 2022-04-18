import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './state/team.reducer';
import { TeamEffects } from './state/team.effects';
import { TeamListPageComponent } from './components/team-list-page/team-list-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TeamListPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.teamReducer),
    EffectsModule.forFeature([TeamEffects])
  ],
  exports: [TeamListPageComponent]
})
export class TeamsModule { }
