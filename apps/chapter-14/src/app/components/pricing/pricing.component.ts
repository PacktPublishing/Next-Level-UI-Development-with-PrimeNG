import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DividerModule } from 'primeng/divider'
import { RippleModule } from 'primeng/ripple'

@Component({
  selector: 'primengbook-pricing',
  standalone: true,
  imports: [CommonModule, DividerModule, ButtonModule, RippleModule],
  template: `
    <div id="pricing" class="py-4 px-4 lg:px-8 my-2 md:my-4">
      <div class="text-center">
        <h2 class="text-900 font-normal mb-2">Choose the Perfect Plan</h2>
        <span class="text-600 text-2xl"
          >Select a plan that suits your needs and unlocks a world of
          possibilities.</span
        >
      </div>

      <div class="grid justify-content-between mt-8 md:mt-0">
        <div class="col-12 lg:col-4 p-0 md:p-3" *ngFor="let plan of plans">
          <div
            class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all"
            style="border-radius:10px"
          >
            <h3 class="text-900 text-center my-5">{{ plan.name }}</h3>
            <div class="my-5 text-center">
              <span class="text-5xl font-bold mr-2 text-900"
                >$ {{ plan.price }}</span
              >
              <span class="text-600">per month</span>
              <button
                pButton
                pRipple
                [label]="plan.cta"
                class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"
              ></button>
            </div>
            <p-divider class="w-full bg-surface-200"></p-divider>
            <ul class="my-5 list-none p-0 flex text-900 flex-column">
              <li class="py-2" *ngFor="let feature of plan.features">
                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                <span class="text-xl line-height-3">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PricingComponent {
  plans = [
    {
      name: 'Basic Plan',
      price: 19.99,
      features: [
        'Access to core features',
        'Email support',
        'Standard storage',
        'Limited storage',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro Plan',
      price: 49.99,
      features: [
        'All basic features',
        'Priority customer support',
        'Increased storage',
        'Analytics dashboard',
      ],
      cta: 'Upgrade Now',
    },
    {
      name: 'Enterprise Plan',
      price: '999',
      features: [
        'All pro features',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
      ],
      cta: 'Contact Sales',
    },
  ]
}
