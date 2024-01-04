import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { FeaturesComponent } from '../../components/features/features.component'
import { HeroComponent } from '../../components/hero/hero.component'
import { PricingComponent } from '../../components/pricing/pricing.component'
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component'

@Component({
  selector: 'primengbook-landing',
  standalone: true,
  template: `
    <div class="surface-0 flex justify-content-center">
      <div class="landing-wrapper overflow-hidden">
        <primengbook-hero />

        <primengbook-features />

        <primengbook-testimonials />

        <primengbook-pricing />
      </div>
    </div>
  `,
  styles: ``,
  imports: [
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    PricingComponent,
  ],
})
export class LandingComponent {
  router = inject(Router)
}
