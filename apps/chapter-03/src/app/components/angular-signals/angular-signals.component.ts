import { CommonModule } from '@angular/common'
import { Component, WritableSignal, effect, signal } from '@angular/core'

@Component({
  selector: 'primengbook-angular-signals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Angular Signals</h2>
    <p>Current count is: {{ count() }}</p>
    <button (click)="setRandomCount()">Set random count</button>
  `,
})
export class AngularSignalsComponent {
  public count: WritableSignal<number> = signal<number>(4)

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`)
    })
  }

  setRandomCount() {
    this.count.set(Math.floor(Math.random() * 10 + 1))
  }
}
