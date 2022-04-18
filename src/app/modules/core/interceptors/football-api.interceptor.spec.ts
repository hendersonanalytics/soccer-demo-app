import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FootballApiInterceptor } from './football-api.interceptor';

describe(`FootballApiInterceptor`, () => {
    let httpTestingController: HttpTestingController;
    let httpClient: HttpClient;

    const HOST_KEY = 'x-api-host';
    const HOST_VALUE = 'v3.api.io';
    const KEY_KEY = 'x-api-key';
    const KEY_VALUE = '1234';

    const environment = {
        apiHeaderInfo: {
          rapidApi: {
            host: {
              key: HOST_KEY,
              value: HOST_VALUE
            },
            key: {
              key: KEY_KEY,
              value: KEY_VALUE
            }
          }
        }
    };

    const expectedHeaders = {};
    expectedHeaders[HOST_KEY] = HOST_VALUE;
    expectedHeaders[KEY_KEY] = KEY_VALUE;

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
            useClass: FootballApiInterceptor,
            multi: true,
          }
        ],
      });

      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    describe('when a http request is made from the app', () => {
      it('the expected headers are appended to the request', fakeAsync(() => {
        httpClient.get(url).subscribe(() => {});
        const resourceRequest = httpTestingController.expectOne(url);
        tick();

        expect(resourceRequest.request.headers.get(HOST_KEY)).toEqual(expectedHeaders[HOST_KEY]);
        expect(resourceRequest.request.headers.get(KEY_KEY)).toEqual(expectedHeaders[KEY_KEY]);

      }));
    });
  });
