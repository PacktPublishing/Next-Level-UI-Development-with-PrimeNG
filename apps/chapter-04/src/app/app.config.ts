import { ApplicationConfig } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { primeNgProvider } from './shared/providers'

export const appConfig: ApplicationConfig = {
  providers: [primeNgProvider, provideAnimations()],
}
