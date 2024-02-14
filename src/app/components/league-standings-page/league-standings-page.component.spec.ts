import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeagueStandingsPageComponent } from './league-standings-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { TEST_STANDINGS_ARRAY } from 'src/app/support/data/test-standings-response';
import { StandingsFacade } from 'src/app/modules/standings/facades/standings.facade';

describe('LeagueStandingsPageComponent', () => {
  let component: LeagueStandingsPageComponent;
  let fixture: ComponentFixture<LeagueStandingsPageComponent>;

  const standingsFacadeMock = {
    standings$: of(TEST_STANDINGS_ARRAY)
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueStandingsPageComponent ],
      imports: [
        IonicModule.forRoot(),
        BrowserModule,
        AppRoutingModule
      ],
      providers:
      [
        { provide: StandingsFacade, useValue: standingsFacadeMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueStandingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
