import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RetryInterceptor } from './retry.interceptor';

xdescribe(`FootballApiInterceptor`, () => {
    let httpTestingController: HttpTestingController;
    let httpClient: HttpClient;

    const environment = {
      httpRetryAttempts: 3,
    };

    const url = 'https://api.com';

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          { provide: 'env' , useValue: environment },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: RetryInterceptor,
            multi: true,
          }
        ],
      });

      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  });
