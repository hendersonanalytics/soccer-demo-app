import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TEST_SEASONS_RESPONSE } from 'src/app/support/data/test-seasons-response';

import { LoaderService } from '../services/loader.service';
import { LoadingIndicatorInterceptor } from './loading-indicator.interceptor';

describe(`LoadingIndicatorInterceptor`, () => {
    let httpTestingController: HttpTestingController;
    let httpClient: HttpClient;
    const url = 'https://api.com';

    const API_ERR_MSG = 'api-error';
    const apiErrorObj = { message: API_ERR_MSG };
    const statusText = API_ERR_MSG;

    const loaderServiceSpy = jasmine.createSpyObj('LoaderService', ['showLoader', 'hideLoader']);

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingIndicatorInterceptor,
            multi: true,
          },
          { provide: LoaderService, useValue: loaderServiceSpy }
        ],
      });

      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      loaderServiceSpy.showLoader.and.returnValue(Promise.resolve(true));
      loaderServiceSpy.hideLoader.and.returnValue(Promise.resolve(true));
    });

    afterEach(() => {
        loaderServiceSpy.showLoader.calls.reset();
        loaderServiceSpy.hideLoader.calls.reset();
    });

    describe('when a http request is made from the app', () => {
      it('the show and hide loader methods are called', fakeAsync(() => {
        httpClient.get(url).subscribe(() => { });
        const req = httpTestingController.expectOne(url);
        req.flush(TEST_SEASONS_RESPONSE);
        httpTestingController.verify();
        tick();

        expect(loaderServiceSpy.showLoader).toHaveBeenCalledOnceWith();
        expect(loaderServiceSpy.hideLoader).toHaveBeenCalledOnceWith();

      }));

      it('the proper methods are called when there is an api error', fakeAsync(() => {
        httpClient.get(url).subscribe(
            () => {},
            // need this error callback if you're testing a simulated error, even if the callback
            // doesn't do anything
            (err) => {}
        );

        const req = httpTestingController.expectOne(url);
        req.flush(apiErrorObj, { status: 500, statusText });
        httpTestingController.verify();
        tick();

        expect(loaderServiceSpy.showLoader).toHaveBeenCalledOnceWith();
        expect(loaderServiceSpy.hideLoader).toHaveBeenCalledOnceWith();
      }));
    });
  });
