import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  template: `
    <h2>Themes Overriding</h2>

    <p-card
      id="my-card"
      header="Super Laptop PRO X"
      subheader="Best for Nomads"
      [style]="{ width: '360px' }"
    >
      <ng-template pTemplate="header">
        <img alt="Card" src="assets/placeholder.png" />
      </ng-template>
      <p>
        The Cancel button background color and color are overridden using
        "ng-deep". You can see by inspecting the browser :)
      </p>
      <ng-template pTemplate="footer">
        <p-button label="Purchase" icon="pi pi-check"></p-button>
        <p-button
          label="Cancel"
          icon="pi pi-times"
          styleClass="p-button-secondary"
          [style]="{ 'margin-left': '.5em' }"
        ></p-button>
      </ng-template>
    </p-card>
  `,
  styles: [
    `
      :host ::ng-deep #my-card .p-button-secondary {
        background-color: var(--cyan-900);
        color: var(--blue-50);
      }
    `,
  ],
})
export default class ThemesOverridingComponent {}
