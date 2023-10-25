// Smart component
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PresentationComponent } from './presentation.component'

@Component({
  selector: 'primengbook-smart',
  standalone: true,
  imports: [CommonModule, PresentationComponent],
  template: `
    <div class="flex align-items-center text-700 flex-wrap">
      <primengbook-presentation
        *ngFor="let item of items"
        [icon]="item.icon"
        [text]="item.text"
      />
    </div>
  `,
})
export class SmartComponent {
  items = [
    {
      icon: ' pi-database',
      text: '124 Total Records',
    },
    {
      icon: ' pi-chart-line',
      text: '736 Growth Rate',
    },
    {
      icon: ' pi-dollar',
      text: '$5.2m Revenue',
    },
  ]
}
