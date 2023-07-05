import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'primengbook-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Data Binding</h2>

    <h3>Interpolation</h3>
    <p>Welcome, {{ username }}!</p>

    <h3>Property Binding</h3>
    <input [value]="username" />

    <h3>Event Binding</h3>
    <button (click)="handleClick()">Click me!</button>

    <h3>Two Way Binding</h3>
    <input [(ngModel)]="username" />
  `,
})
export class DataBindingComponent {
  username = 'John Doe'

  handleClick() {
    alert(`Welcome, ${this.username}`)
  }
}
