import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'primengbook-root',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>

    <h3>Example CTA</h3>

    <section
      class="call-to-action text-center surface-ground p-4 hover:surface-200"
    >
      <h2>5 Things Your Spreadsheets Can't Do</h2>

      <button
        routerLink="/spreadsheets/demo"
        pButton
        pRipple
        label="Show Me Now"
        class="p-button-raised p-button-primary"
      ></button>
    </section>
  `,
})
export class AppComponent {
  name = 'Chapter 01'
}

bootstrapApplication(AppComponent)
