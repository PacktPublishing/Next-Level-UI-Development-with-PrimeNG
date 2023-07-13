import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'primengbook-button-override-styles',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <h2>Button Override Styles</h2>

    <button pButton type="button" label="Custom styles"></button>
  `,
  styles: [
    `
      .p-button {
        background-color: #696cff;
        border-radius: 5px;
      }
    `,
  ],
})
export class ButtonOverrideStylesComponent {}
