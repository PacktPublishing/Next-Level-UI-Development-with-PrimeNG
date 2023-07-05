import { Component } from '@angular/core'
import {
  AngularDirectivesComponent,
  AngularPipesComponent,
  AngularServicesComponent,
  AngularSignalsComponent,
  DataBindingComponent,
} from './components'

@Component({
  standalone: true,
  selector: 'primengbook-root',
  template: `
    <h1>Welcome chapter-03</h1>
    <primengbook-data-binding />
    <primengbook-angular-services />
    <primengbook-angular-directives />
    <primengbook-angular-pipes />
    <primengbook-angular-signals />
  `,
  imports: [
    DataBindingComponent,
    AngularServicesComponent,
    AngularDirectivesComponent,
    AngularSignalsComponent,
    AngularPipesComponent,
  ],
})
export class AppComponent {}
