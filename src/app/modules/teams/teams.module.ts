import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './state/team.reducer';
import { TeamEffects } from './state/team.effects';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.teamReducer),
    EffectsModule.forFeature([TeamEffects]),
  ]
})
export class TeamsModule { }
