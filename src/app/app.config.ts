import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideClientHydration(),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules), withDebugTracing())
  ]
};
