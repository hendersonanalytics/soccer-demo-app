import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './state/team.reducer';
import { TeamEffects } from './state/team.effects';
import { IonicModule } from '@ionic/angular';
import { TeamListPageModule } from './components/team-list-page/team-list.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.teamReducer),
    EffectsModule.forFeature([TeamEffects]),
    TeamListPageModule
  ]
})
export class TeamsModule { }
