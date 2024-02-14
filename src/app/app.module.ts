import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LeaguesModule } from './modules/leagues/leagues.module';
import { PlayersModule } from './modules/players/players.module';
import { TeamsModule } from './modules/teams/teams.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoreModule } from './modules/core/core.module';
import { LeagueListPageComponent } from './components/league-list-page/league-list.page';
import { PlayerListPageComponent } from './components/player-list-page/player-list-page.component';
import { TeamListPageComponent } from './components/team-list-page/team-list-page.component';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { PlayerDetailPageComponent } from './components/player-detail-page/player-detail-page.component';
import { LeagueOptionsPageComponent } from './components/league-options-page/league-options-page.component';
import { LeagueStandingsPageComponent } from './components/league-standings-page/league-standings-page.component';
import { StandingsModule } from './modules/standings/standings.module';

@NgModule({
  declarations: [
    AppComponent,
    LeagueListPageComponent,
    PlayerListPageComponent,
    TeamListPageComponent,
    PlayerDetailPageComponent,
    LeagueOptionsPageComponent,
    LeagueStandingsPageComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    LeaguesModule,
    PlayersModule,
    TeamsModule,
    CoreModule,
    StandingsModule,
    SharedComponentsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide : 'env',
      useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
