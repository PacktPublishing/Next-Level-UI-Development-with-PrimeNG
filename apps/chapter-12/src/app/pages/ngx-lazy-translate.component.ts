import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { LanguageComponent } from '../components/language.component'

@Component({
  standalone: true,
  template: `
    <h2>Ngx Lazy Translate</h2>

    <primengbook-language />
    <p>{{ 'lazy' | translate }}</p>
  `,
  imports: [CommonModule, TranslateModule, LanguageComponent],
})
export default class NgxLazyTranslateComponent {}
