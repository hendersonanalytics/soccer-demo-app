import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';

import * as fromReducer from './state/player.reducer';
import { PlayerEffects } from './state/player.effects';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.playerReducer),
    EffectsModule.forFeature([PlayerEffects]),
  ]
})
export class PlayersModule { }
