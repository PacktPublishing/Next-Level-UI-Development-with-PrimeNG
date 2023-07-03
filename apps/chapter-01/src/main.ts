import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'

@Component({
  selector: 'primengbook-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class AppComponent {
  name = 'Chapter 01'
}

bootstrapApplication(AppComponent)
