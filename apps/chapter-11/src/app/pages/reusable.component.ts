import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { StatComponent } from '../components/stat.component'

interface Stat {
  title: string
  count: string
  icon: string
  iconBackground: string
  newCount: string
  newCountMessage: string
}

@Component({
  standalone: true,
  imports: [CommonModule, StatComponent],
  template: `
    <h2>Reusable Components</h2>

    <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
      <div class="grid">
        <primengbook-stat
          *ngFor="let stat of stats"
          [title]="stat.title"
          [count]="stat.count"
          [icon]="stat.icon"
          [iconBackground]="stat.iconBackground"
          [newCount]="stat.newCount"
          [newCountMessage]="stat.newCountMessage"
          class="col-12 md:col-6 lg:col-3"
        />
      </div>
    </div>
  `,
})
export default class ReusableComponent {
  stats: Stat[] = [
    {
      title: 'Orders',
      count: '152',
      icon: 'pi pi-shopping-cart',
      iconBackground: 'bg-blue-100',
      newCount: '24 new',
      newCountMessage: 'since last visit',
    },
    {
      title: 'Revenue',
      count: '$2.100',
      icon: 'pi pi-shopping-cart',
      iconBackground: 'bg-orange-100',
      newCount: '%52+',
      newCountMessage: 'since last visit',
    },
  ]
}
