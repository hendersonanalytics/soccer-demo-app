import { TestBed } from '@angular/core/testing';

import { LeagueSeasonGuard } from './league-season.guard';

xdescribe('LeagueSeasonGuard', () => {
  let guard: LeagueSeasonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeagueSeasonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
