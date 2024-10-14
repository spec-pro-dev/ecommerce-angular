import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Interceptor } from '../shared/interseptors/interceptors';
import { loadingReducer } from '../shared/ngrx/reducers/loading.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      loading: loadingReducer,
    }),
    provideEffects(),
    provideHttpClient(
      withInterceptors([Interceptor]) // Use the functional interceptor here
    ),
  ],
};
