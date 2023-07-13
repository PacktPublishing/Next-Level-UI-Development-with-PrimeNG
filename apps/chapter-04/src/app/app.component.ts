import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import {
  ButtonConfigurationComponent,
  ButtonOverrideStylesComponent,
} from './components'

@Component({
  standalone: true,
  selector: 'primengbook-root',
  template: `
    <h1>Welcome chapter-04</h1>

    <!-- PrimeNg component approach -->
    <p-button label="Click me" />

    <!-- PrimeNg directive approach -->
    <!-- <button pButton type="button" label="Click me"></button> -->

    <primengbook-button-configuration />
    <primengbook-button-override-styles />
  `,
  imports: [
    ButtonModule,
    ButtonConfigurationComponent,
    ButtonOverrideStylesComponent,
  ],
})
export class AppComponent {}
