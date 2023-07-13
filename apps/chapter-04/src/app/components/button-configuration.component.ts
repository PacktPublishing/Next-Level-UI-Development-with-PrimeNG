import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'primengbook-button-configuration',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <h2>Button Configuration</h2>

    <p-button
      label="Click me!"
      icon="pi pi-check"
      iconPos="right"
      [disabled]="isDisabled"
    />
  `,
})
export class ButtonConfigurationComponent {
  isDisabled = true
}
