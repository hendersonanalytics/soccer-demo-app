import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { StandingsEffects } from './state/standings.effects';
import * as fromReducer from './state/standings.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.standingsReducer),
    EffectsModule.forFeature([StandingsEffects])
  ]
})
export class StandingsModule { }
