import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LeagueFacade } from '../../modules/leagues/facades/league.facade';
import { FootballApiLeaguesResponseInfo } from '../../modules/leagues/models/football-api-leagues-response-info.interface';

import { COUNTRY_NAMES } from 'src/app/constants/country-names';
import { LEAGUE_IDS } from 'src/app/constants/league-ids';

@Component({
  selector: 'app-home',
  templateUrl: 'league-list.page.html',
  styleUrls: ['league-list.page.scss'],
})
export class LeagueListPageComponent implements OnInit {
  seasons$: Observable<number[]>;
  countries$: Observable<string[]>;
  leagues$: Observable<FootballApiLeaguesResponseInfo[]>;

  constructor(private leagueFacade: LeagueFacade) {}

  ngOnInit(): void {
    this.leagueFacade.fetchSeasons();
    this.seasons$ = this.leagueFacade.seasons$.pipe(
      map((seasons) => seasons
        .filter((season) => {
          return season <= new Date().getFullYear() - 1 && season >= 2013;
        })
        .sort((a, b) => b - a)
      )
    );
    this.countries$ = this.leagueFacade.countries$.pipe(
      map((countries) => countries.filter((country) => COUNTRY_NAMES.includes(country)))
    );
    this.leagues$ = this.leagueFacade.leagues$.pipe(
      map((leagues) => leagues.filter((league) => LEAGUE_IDS.includes(league.league.id)))
    );
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
