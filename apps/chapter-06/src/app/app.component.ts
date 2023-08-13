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
    <h1 [routerLink]="['/']">Welcome to chapter-06</h1>

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
  // styles: [
  //   `
  //     .layout-wrapper {
  //       display: flex;
  //       gap: 4rem;
  //       flex-wrap: wrap;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'PrimeFlex',
      routerLink: 'primeflex',
    },
    {
      label: 'Table',
      routerLink: 'table',
    },
    {
      label: 'DataView',
      routerLink: 'dataview',
    },
    {
      label: 'OrderList',
      routerLink: 'orderlist',
    },
    {
      label: 'PickList',
      routerLink: 'picklist',
    },
    {
      label: 'Card',
      routerLink: 'card',
    },
  ]
}
