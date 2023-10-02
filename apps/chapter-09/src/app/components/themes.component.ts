import { CommonModule, DOCUMENT } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { RadioButtonModule } from 'primeng/radiobutton'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    CardModule,
    DividerModule,
  ],
  template: `
    <h2>Themes</h2>

    <h3>Switching Themes</h3>

    <div class="card flex justify-content-center">
      <div class="flex flex-wrap gap-3">
        <div class="flex align-items-center" *ngFor="let theme of themes">
          <p-radioButton
            [name]="theme.name"
            [value]="theme.value"
            [(ngModel)]="selectedTheme"
            inputId="{{ theme.value }}"
            (onClick)="changeTheme()"
          />
          <label for="{{ theme.value }}" class="ml-2">{{ theme.name }}</label>
        </div>
      </div>
    </div>

    <p-divider />

    <p-card
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
export default class ThemesComponent {
  private document = inject(DOCUMENT)

  themes = [
    { name: 'Lara Light Blue', value: 'lara-light-blue' },
    { name: 'Bootstrap4 Light Purple', value: 'bootstrap4-light-purple' },
    { name: 'Viva Dark', value: 'viva-dark' },
    { name: 'Material Dark Indigo', value: 'md-dark-indigo' },
  ]

  selectedTheme = 'lara-light-blue'

  changeTheme() {
    const themeLink = this.document.getElementById('theme-link')
    themeLink?.setAttribute('href', `assets/${this.selectedTheme}/theme.css`)
  }
}
