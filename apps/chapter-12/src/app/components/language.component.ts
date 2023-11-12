import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core'
import { PrimeNGConfig } from 'primeng/api'
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown'
import { I18nService } from '../services/i18n.service'

@Component({
  standalone: true,
  selector: 'primengbook-language',
  template: `
    <p-dropdown
      [options]="languages"
      optionLabel="label"
      optionValue="value"
      [(ngModel)]="currentLang"
      (onChange)="switchLanguage($event)"
    />
  `,

  imports: [CommonModule, DropdownModule, FormsModule],
})
export class LanguageComponent {
  private translateService = inject(TranslateService)
  private i18nService = inject(I18nService)
  private primeNgConfig = inject(PrimeNGConfig)

  currentLang = this.i18nService.currentLang

  languages = [
    {
      label: 'English',

      value: 'en',
    },

    {
      label: 'Tiếng Việt',

      value: 'vi',
    },
  ]

  constructor() {
    this.translateService.use(this.currentLang)
  }

  switchLanguage(event: DropdownChangeEvent) {
    this.translateService.use(event.value)
    this.i18nService.currentLang = event.value

    this.translateService.get('primeng').subscribe((res) => {
      console.log(res)
      this.primeNgConfig.setTranslation(res)
    })
  }
}
