import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkWithHref, RouterOutlet } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { MenuItem } from 'primeng/api'
import { MenuModule } from 'primeng/menu'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    MenuModule,
    TranslateModule,
  ],
  selector: 'primengbook-root',
  template: `
    <h1 [routerLink]="['/']">Welcome to chapter-13</h1>

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
      label: 'Sample Test',
      routerLink: 'sample-test',
    },
    {
      label: 'Tips',
      routerLink: 'tips',
    },
  ]
}
