import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RetryInterceptor implements HttpInterceptor {
    constructor(@Inject('env') private environment: any) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(this.environment.httpRetryAttempts)
          )
    }
}
