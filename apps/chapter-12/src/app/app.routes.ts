import { Route } from '@angular/router'
import { provideLazyTranslation } from './providers/lazy-translation.provider'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ngx-translate',
  },
  {
    path: 'ngx-translate',
    loadComponent: () => import('./pages/ngx-translate.component'),
  },
  {
    path: 'ngx-lazy-translate',
    loadComponent: () => import('./pages/ngx-lazy-translate.component'),
    providers: [provideLazyTranslation()],
  },
  {
    path: 'primeng-locale',
    loadComponent: () => import('./pages/primeng-locale.component'),
  },
]
