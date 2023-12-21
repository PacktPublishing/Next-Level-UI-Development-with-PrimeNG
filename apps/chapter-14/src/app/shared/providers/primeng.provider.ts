import { APP_INITIALIZER } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api'

const factory = (primengConfig: PrimeNGConfig) => {
  return () => {
    primengConfig.ripple = true

    primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlay panel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    }
  }
}

export const primeNgProvider = {
  provide: APP_INITIALIZER,
  useFactory: factory,
  deps: [PrimeNGConfig],
  multi: true,
}
