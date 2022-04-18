import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FootballApiInterceptor implements HttpInterceptor {
    constructor(@Inject('env') private environment: any) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const updatedRequest = req.clone({ setHeaders: this.getHeaders() });
        return next.handle(updatedRequest);
    }

    private getHeaders() {
        return {
          [this.environment.apiHeaderInfo.rapidApi.host.key]: this.environment.apiHeaderInfo.rapidApi.host.value,
          [this.environment.apiHeaderInfo.rapidApi.key.key]: this.environment.apiHeaderInfo.rapidApi.key.value
        };
    }
}
