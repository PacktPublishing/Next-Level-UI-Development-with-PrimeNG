import { Route } from '@angular/router'
import { LandingComponent } from './pages/landing/landing.component'

export const appRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
]
