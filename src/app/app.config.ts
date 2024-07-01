import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(NoPreloading),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};
