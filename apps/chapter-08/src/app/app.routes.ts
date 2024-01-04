import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu',
  },
  {
    path: 'menu',
    loadComponent: () => import('./components/menu.component'),
  },
  {
    path: 'panel',
    loadComponent: () => import('./components/panel.component'),
  },
]
