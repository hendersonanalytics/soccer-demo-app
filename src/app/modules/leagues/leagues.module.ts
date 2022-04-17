import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as fromReducer from './state/league.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeagueEffects } from './state/league.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.leagueReducer),
    EffectsModule.forFeature([LeagueEffects])
  ]
})
export class LeaguesModule { }
