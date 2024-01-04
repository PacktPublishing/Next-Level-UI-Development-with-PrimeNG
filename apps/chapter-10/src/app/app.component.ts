import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkWithHref, RouterOutlet } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { MenuModule } from 'primeng/menu'

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref, MenuModule],
  selector: 'primengbook-root',
  template: `
    <h1 [routerLink]="['/']">Welcome to chapter-10</h1>
    {{ changeDetectionTriggered() }}
    <div class="flex flex-wrap gap-7">
      <aside>
        <nav>
          <p-menu [model]="items" />
        </nav>
      </aside>
      <main class="flex-auto">
        <router-outlet />
      </main>
    </div>
  `,
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: 'home',
    },
    {
      label: 'Products',
      routerLink: 'products',
    },
    {
      label: 'Cart',
      routerLink: 'cart',
    },
    {
      label: 'User Profile',
      routerLink: 'user-profile',
    },
    {
      label: 'Optimized Data Binding',
      routerLink: 'optimized-data-binding',
    },
  ]

  changeDetectionTriggered() {
    console.log('APP - CD Triggered')
  }
}
