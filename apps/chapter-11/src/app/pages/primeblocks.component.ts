import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <h2>PrimeBlocks</h2>

    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3">
          <i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
        </div>
        <div class="text-900 font-bold text-5xl mb-3">
          Join Our Design Community
        </div>
        <div class="text-700 text-2xl mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos.
        </div>
        <button
          pButton
          pRipple
          label="Join Now"
          icon="pi pi-discord"
          class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        ></button>
      </div>
    </div>
  `,
})
export default class PrimeBlocksComponent {}
