import { TestBed } from '@angular/core/testing';

import { TeamGuard } from './team.guard';

xdescribe('TeamGuard', () => {
  let guard: TeamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeamGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
