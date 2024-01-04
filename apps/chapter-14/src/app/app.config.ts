import { ApplicationConfig } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app.routes'
import { primeNgProvider } from './shared/providers'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideAnimations(), primeNgProvider],
}
