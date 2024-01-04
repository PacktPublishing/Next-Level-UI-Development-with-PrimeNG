import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router'
import { appRoutes } from './app.routes'
// import { provideTranslation } from './providers/translation.provider'

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    // provideTranslation(),
  ],
}
