import { Component } from '@angular/core'
import { LandingComponent } from './pages/landing/landing.component'

@Component({
  standalone: true,
  selector: 'primengbook-root',
  template: ` <primengbook-landing />`,
  styles: ``,
  imports: [LandingComponent],
})
export class AppComponent {}
