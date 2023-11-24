import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  template: `
    <h2>Sample Test</h2>

    <p-card
      id="card"
      header="Super Laptop PRO X"
      subheader="Best for Nomads"
      [style]="{ width: '360px' }"
    >
      <ng-template pTemplate="header">
        <img alt="Card" src="assets/placeholder.png" />
      </ng-template>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
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
})
export class SampleTestComponent {}
