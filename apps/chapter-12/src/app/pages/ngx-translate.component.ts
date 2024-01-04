import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { ButtonModule } from 'primeng/button'
import { LanguageComponent } from '../components/language.component'

@Component({
  standalone: true,
  template: `
    <h2>Ngx Translate</h2>

    <primengbook-language />
    <p>{{ 'welcome' | translate }}</p>

    <h3>UI Broken Example</h3>

    <p-button
      icon="pi pi-check"
      label="{{ 'happy' | translate }}"
      [style]="{ 'max-width': '200px' }"
    />
  `,
  imports: [CommonModule, TranslateModule, LanguageComponent, ButtonModule],
})
export default class NgxTranslateComponent {}
