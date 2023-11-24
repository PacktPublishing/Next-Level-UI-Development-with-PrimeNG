import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sample-test',
  },
  {
    path: 'sample-test',
    loadComponent: () =>
      import('./pages/sample-test/sample-test.component').then(
        (m) => m.SampleTestComponent
      ),
  },
  {
    path: 'tips',
    loadComponent: () =>
      import('./pages/tips/tips.component').then((m) => m.TipsComponent),
  },
]
