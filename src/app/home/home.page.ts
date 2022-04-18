import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LeagueFacade } from '../modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from '../modules/leagues/models/football-api-leagues-response-info.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  seasons$: Observable<number[]>;
  countries$: Observable<string[]>;
  leagues$: Observable<FootballApiLeaguesResponseInfo[]>;

  constructor(private leagueFacade: LeagueFacade) {}

  ngOnInit(): void {
    this.leagueFacade.fetchSeasons();
    this.seasons$ = this.leagueFacade.seasons$;
    this.countries$ = this.leagueFacade.countries$;
    this.leagues$ = this.leagueFacade.leagues$;
  }

  onChangeSeason(event): void {
    this.leagueFacade.selectSeason(event.target.value);
  }

  onSelectLeague(id: number): void {
    this.leagueFacade.selectLeague(id);
  }

  onChangeCountry(event): void {
    this.leagueFacade.selectCountry(event.target.value);
  }
}
