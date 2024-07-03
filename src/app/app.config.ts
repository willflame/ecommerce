import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { httpErrorsInterceptor } from './interceptors/http-errors/http-errors.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(NoPreloading),
      withComponentInputBinding() // Habilitar pegar parâmetros da rota com @Input()<nome-do-parâmetro>
    ),
    provideHttpClient(withInterceptors([httpErrorsInterceptor])),
    provideAnimationsAsync(),
  ],
};
