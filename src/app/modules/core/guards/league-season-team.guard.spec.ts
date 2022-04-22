import { TestBed } from '@angular/core/testing';

import { LeagueSeasonTeamGuard } from './league-season-team.guard';

xdescribe('LeagueSeasonTeamGuard', () => {
  let guard: LeagueSeasonTeamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeagueSeasonTeamGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
