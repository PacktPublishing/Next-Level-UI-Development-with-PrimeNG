import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'primeflex',
  },
  {
    path: 'primeflex',
    loadComponent: () => import('./components/primeflex.component'),
  },
  {
    path: 'table',
    loadComponent: () => import('./components/table.component'),
  },
  {
    path: 'dataview',
    loadComponent: () => import('./components/dataview.component'),
  },
  {
    path: 'orderlist',
    loadComponent: () => import('./components/orderlist.component'),
  },
  {
    path: 'picklist',
    loadComponent: () => import('./components/picklist.component'),
  },
  {
    path: 'card',
    loadComponent: () => import('./components/card.component'),
  },
]
