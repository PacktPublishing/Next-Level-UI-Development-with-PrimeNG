import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'themes',
  },
  {
    path: 'themes',
    loadComponent: () => import('./components/themes.component'),
  },
  {
    path: 'visual-editor-themes',
    loadComponent: () => import('./components/visual-editor-theme.component'),
  },
  {
    path: 'themes-overriding',
    loadComponent: () => import('./components/themes-overriding.component'),
  },
]
