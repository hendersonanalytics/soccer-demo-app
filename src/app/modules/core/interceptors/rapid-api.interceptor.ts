import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RapidApiInterceptor implements HttpInterceptor {
    constructor(@Inject('env') private environment: any) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const updatedRequest = req.clone({ setHeaders: this.getHeaders() });
        return next.handle(updatedRequest);
    }

    private getHeaders() {
        return {
          [this.environment.apiHeaderInfo.rapidApiAlt.host.key]: this.environment.apiHeaderInfo.rapidApiAlt.host.value,
          [this.environment.apiHeaderInfo.rapidApiAlt.key.key]: this.environment.apiHeaderInfo.rapidApiAlt.key.value
        };
    }
}
