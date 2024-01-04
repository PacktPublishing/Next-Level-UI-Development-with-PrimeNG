import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tree',
  },
  {
    path: 'tree',
    loadComponent: () => import('./components/tree.component'),
  },
  {
    path: 'treetable',
    loadComponent: () => import('./components/treetable.component'),
  },
  {
    path: 'timeline',
    loadComponent: () => import('./components/timeline.component'),
  },
]
