import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { SmartComponent } from '../components/smart.component'

@Component({
  standalone: true,
  template: `
    <h2>Best Practices</h2>
    <primengbook-smart />
  `,
  imports: [CommonModule, SmartComponent],
})
export default class BestPracticesComponent {}
