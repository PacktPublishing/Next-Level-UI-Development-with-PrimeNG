import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ReversePipe } from '../../shared/pipes'

@Component({
  selector: 'primengbook-angular-pipes',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  template: `
    <h2>Angular Pipes</h2>

    <p>Today is {{ today | date : 'longDate' }}</p>
    <p>The price is {{ price | currency : 'USD' }}</p>
    <p>{{ greeting | uppercase }} is converted to uppercase</p>
    <p>Revere of 'abc' is {{ 'abc' | reverse }}</p>
  `,
  styles: [],
})
export class AngularPipesComponent {
  today = new Date()
  price = 10.99
  greeting = 'John Doe'
}
