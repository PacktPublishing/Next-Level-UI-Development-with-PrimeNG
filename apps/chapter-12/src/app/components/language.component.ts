import { CommonModule, DOCUMENT } from '@angular/common'
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
  private document = inject(DOCUMENT)

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
    {
      label: 'الفيتنامية',
      value: 'ar',
    },
  ]

  constructor() {
    this.translateService.use(this.currentLang)
  }

  switchLanguage(event: DropdownChangeEvent) {
    this.updateHtmlTag(event.value)

    this.translateService.use(event.value)
    this.i18nService.currentLang = event.value

    this.translateService.get('primeng').subscribe((res) => {
      console.log(res)
      this.primeNgConfig.setTranslation(res)
    })
  }

  private updateHtmlTag(lang: string) {
    let direction = 'ltr'

    if (['ar'].includes(lang)) {
      direction = 'rtl'
    }

    this.document.getElementsByTagName('html')[0].setAttribute('lang', lang)
    this.document.getElementsByTagName('body')[0].setAttribute('dir', direction)
  }
}
