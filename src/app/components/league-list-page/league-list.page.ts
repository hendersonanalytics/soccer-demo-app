import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LeagueFacade } from '../../modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from '../../modules/leagues/models/football-api-leagues-response-info.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'league-list.page.html',
  styleUrls: ['league-list.page.scss'],
})
export class LeagueListPageComponent implements OnInit {
  seasons$: Observable<number[]>;
  countries$: Observable<string[]>;
  leagues$: Observable<FootballApiLeaguesResponseInfo[]>;

  private readonly FILTER_COUNTRIES = [
    'England',
    'France',
    'Germany',
    'Italy',
    'Spain',
    'Brazil',
    'Mexico',
    'Argentina',
    'Portugal',
    'USA',
    'Netherlands',
  ];

  constructor(private leagueFacade: LeagueFacade) {}

  ngOnInit(): void {
    this.leagueFacade.fetchSeasons();
    this.seasons$ = this.leagueFacade.seasons$.pipe(
      map((seasons) => seasons
        .filter((season) => season <= new Date().getFullYear() - 1)
        .sort((a, b) => b - a)
      )
    );
    this.countries$ = this.leagueFacade.countries$.pipe(
      map((countries) => countries.filter((country) => this.FILTER_COUNTRIES.includes(country)))
    );
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
