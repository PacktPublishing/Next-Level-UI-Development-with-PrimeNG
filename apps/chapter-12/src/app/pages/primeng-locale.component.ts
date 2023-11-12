import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CalendarModule } from 'primeng/calendar'
import { LanguageComponent } from '../components/language.component'

@Component({
  standalone: true,
  template: `
    <h2>PrimeNg Locale</h2>

    <primengbook-language />
    <p-calendar />
  `,
  imports: [CommonModule, CalendarModule, LanguageComponent],
})
export default class PrimeNgLocaleComponent {}
