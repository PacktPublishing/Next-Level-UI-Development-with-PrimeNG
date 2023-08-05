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
    <h1 [routerLink]="['/']">Welcome to chapter-05</h1>

    <div class="layout-wrapper">
      <aside>
        <nav>
          <p-menu [model]="items" />
        </nav>
      </aside>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      .layout-wrapper {
        display: flex;
        gap: 4rem;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Template Driven',
      routerLink: 'template-driven',
    },
    {
      label: 'Reactive Forms',
      routerLink: 'reactive-forms',
    },
    {
      label: 'PrimeNg Reactive Forms',
      routerLink: 'primeng-reactive-forms',
    },
    {
      label: 'Contact Form',
      routerLink: 'contact-form',
    },
    {
      label: 'Dropdown',
      routerLink: 'dropdown',
    },
    {
      label: 'MultiSelect',
      routerLink: 'multiselect',
    },
    {
      label: 'Calendar',
      routerLink: 'calendar',
    },
    {
      label: 'Form With Validation',
      routerLink: 'form-with-validation',
    },
  ]
}
