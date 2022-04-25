import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';

import { LoaderService } from '../services/loader.service';

@Injectable({ providedIn: 'root' })
export class LoadingIndicatorInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.showLoader();

        return next.handle(req).pipe(
            filter(event => event instanceof HttpResponse),
            tap(() => {
                this.loaderService.hideLoader();
            }),
            map((event) => event),
            catchError((err) => {
                this.loaderService.hideLoader();
                return throwError(err);
            })
        );
    }
}
