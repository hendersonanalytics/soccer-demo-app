import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IonicModule } from '@ionic/angular';

import * as fromReducer from './state/player.reducer';
import { PlayerEffects } from './state/player.effects';
import { PlayerListPageComponent } from './components/player-list-page/player-list-page.component';
import { PlayerListRoutingModule } from './components/player-list-page/player-list-routing.module';

@NgModule({
  declarations: [PlayerListPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.playerReducer),
    EffectsModule.forFeature([PlayerEffects]),
    PlayerListRoutingModule
  ],
  exports: [PlayerListPageComponent]
})
export class PlayersModule { }
