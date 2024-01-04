import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'
import { NavService } from '../../shared/services/nav.service'

@Component({
  selector: 'primengbook-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  template: `
    <section
      id="hero"
      class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
      style="background: radial-gradient(120% 100% at top left,transparent 92%, #fff 92.5%), linear-gradient(135deg, #51a595 0%, #3fcfa2 100%);"
    >
      <div class="mx-4 md:mx-8 mt-0 md:mt-4">
        <h1 class="text-6xl font-bold text-gray-900 line-height-2">
          <span class="font-light block">Revolutionize Your Workflow</span
          >All-in-One Solution
        </h1>
        <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">
          Unlock efficiency with our feature-packed SaaS platform. Take your
          business to new heights.
        </p>
        <button
          pButton
          pRipple
          (click)="navService.navigateTo('pricing')"
          type="button"
          label="Get Started"
          class="p-button-rounded text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white"
        ></button>
      </div>
      <div class="hidden md:flex justify-content-center md:justify-content-end">
        <img
          src="assets/hero-image.png"
          alt="Hero Image"
          class="w-9 md:w-auto"
        />
      </div>
    </section>
  `,
})
export class HeroComponent {
  navService = inject(NavService)
}
