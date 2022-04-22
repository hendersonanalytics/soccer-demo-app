import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FootballApiInterceptor } from './interceptors/football-api.interceptor';
import { LeagueSeasonGuard } from './guards/league-season.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootballApiInterceptor,
      multi: true,
    },
    LeagueSeasonGuard
  ]
})
export class CoreModule { }
