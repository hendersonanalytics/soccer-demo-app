import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingIndicatorInterceptor } from './interceptors/loading-indicator.interceptor';
import { RapidApiInterceptor } from './interceptors/rapid-api.interceptor';
import { ImgFallbackDirective } from './directives/img-fallback.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImgFallbackDirective
  ],
  exports: [
    ImgFallbackDirective
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RapidApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingIndicatorInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule { }
