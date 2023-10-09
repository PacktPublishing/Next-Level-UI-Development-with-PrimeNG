import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    // component: HomeComponent,
    loadComponent: () => import('./components/home.component'),
  },
  {
    path: 'products',
    // component: ProductsComponent,
    loadComponent: () => import('./components/products.component'),
  },
  {
    path: 'cart',
    // component: CartComponent,
    loadComponent: () => import('./components/cart.component'),
  },
  {
    path: 'user-profile',
    // component: UserProfileComponent,
    loadComponent: () => import('./components/user-profile.component'),
  },
  {
    path: 'optimized-data-binding',
    loadComponent: () =>
      import('./components/optimized-data-binding.component'),
  },
]
