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
    <h1 [routerLink]="['/']">Welcome to chapter-07</h1>

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
      label: 'Tree',
      routerLink: 'tree',
    },
    {
      label: 'TreeTable',
      routerLink: 'treetable',
    },
    {
      label: 'Timeline',
      routerLink: 'timeline',
    },
  ]
}
