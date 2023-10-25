import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'best-practices',
  },
  {
    path: 'best-practices',
    loadComponent: () => import('./pages/best-practices.component'),
  },
  {
    path: 'style-classes',
    loadComponent: () => import('./pages/style-classes.component'),
  },
  {
    path: 'primeblocks',
    loadComponent: () => import('./pages/primeblocks.component'),
  },
  {
    path: 'reusable',
    loadComponent: () => import('./pages/reusable.component'),
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth.component'),
  },
]
