import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'primengbook-stat',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="surface-card shadow-2 p-3 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">{{ title }}</span>
          <div class="text-900 font-medium text-xl">{{ count }}</div>
        </div>
        <div
          class="flex align-items-center justify-content-center {{
            iconBackground
          }} border-round"
          style="width:2.5rem;height:2.5rem"
        >
          <i class="{{ icon }} text-blue-500 text-xl"></i>
        </div>
      </div>
      <span class="text-green-500 font-medium">{{ newCount }} </span>
      <span class="text-500">{{ newCountMessage }}</span>
    </div>
  `,
  styles: [
    `
      host: {
        display: block;
      }
    `,
  ],
})
export class StatComponent {
  @Input() title: string
  @Input() count: string
  @Input() icon: string
  @Input() iconBackground: string
  @Input() newCount: string
  @Input() newCountMessage: string
}
