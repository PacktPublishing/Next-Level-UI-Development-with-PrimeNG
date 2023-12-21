import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { FeaturesComponent } from '../../components/features/features.component'
import { FooterComponent } from '../../components/footer/footer.component'
import { HeaderComponent } from '../../components/header/header.component'
import { HeroComponent } from '../../components/hero/hero.component'
import { PricingComponent } from '../../components/pricing/pricing.component'
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component'

@Component({
  selector: 'primengbook-landing',
  standalone: true,
  template: `
    <div class="surface-0 flex justify-content-center">
      <div id="home" class="landing-wrapper overflow-hidden">
        <primengbook-header />

        <primengbook-hero />

        <primengbook-features />

        <primengbook-testimonials />

        <primengbook-pricing />

        <primengbook-footer />
      </div>
    </div>
  `,
  styles: ``,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    PricingComponent,
    FooterComponent,
  ],
})
export class LandingComponent {
  router = inject(Router)
}
