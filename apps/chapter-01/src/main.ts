import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { PrimeNGConfig } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'

@Component({
  selector: 'primengbook-root',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
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
export class AppComponent implements OnInit {
  private primengConfig = inject(PrimeNGConfig)

  name = 'Chapter 01'

  ngOnInit() {
    this.primengConfig.ripple = true
  }
}

bootstrapApplication(AppComponent)
