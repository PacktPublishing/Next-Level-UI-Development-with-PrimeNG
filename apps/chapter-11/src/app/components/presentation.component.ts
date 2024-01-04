// Presentation component
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { BadgeModule } from 'primeng/badge'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'primengbook-presentation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, BadgeModule],
  template: `
    <div class="mr-5 flex align-items-center mt-3">
      <i class="pi {{ icon }} mr-2"></i>
      <span>{{ text }}</span>
    </div>
  `,
})
export class PresentationComponent {
  @Input({ required: true }) icon: string
  @Input({ required: true }) text: string
}
