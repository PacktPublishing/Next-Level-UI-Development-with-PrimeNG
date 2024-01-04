import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'template-driven',
    loadComponent: () => import('./components/template-driven.component'),
  },
  {
    path: 'reactive-forms',
    loadComponent: () => import('./components/reactive-forms.component'),
  },
  {
    path: 'primeng-reactive-forms',
    loadComponent: () =>
      import('./components/primeng-reactive-forms.component'),
  },
  {
    path: 'contact-form',
    loadComponent: () => import('./components/contact-form.component'),
  },
  {
    path: 'dropdown',
    loadComponent: () => import('./components/dropdown.component'),
  },
  {
    path: 'multiselect',
    loadComponent: () => import('./components/multiselect.component'),
  },
  {
    path: 'calendar',
    loadComponent: () => import('./components/calendar.component'),
  },
  {
    path: 'form-with-validation',
    loadComponent: () =>
      import('./components/contact-form-with-validation.component'),
  },
]
