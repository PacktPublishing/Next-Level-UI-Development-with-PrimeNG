import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { NavService } from '../../shared/services/nav.service'

@Component({
  selector: 'primengbook-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-4 px-4 mx-0 mt-8 lg:mx-8">
      <div class="grid justify-content-between">
        <div class="col-12 md:col-2" style="margin-top:-1.5rem;">
          <a
            (click)="navService.navigateTo('header')"
            class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer"
          >
            <h4 class="font-medium text-3xl text-900">PRIMEBOOK</h4>
          </a>
        </div>

        <div class="col-12 md:col-10 lg:col-7">
          <div class="grid text-center md:text-left">
            <div class="col-12 md:col-4">
              <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                Company
              </h4>
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                >About Us</a
              >
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                >Products</a
              >
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                >Careers</a
              >
              <a class="line-height-3 text-xl block cursor-pointer text-700"
                >Contact</a
              >
            </div>

            <div class="col-12 md:col-4 mt-4 md:mt-0">
              <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                Support
              </h4>
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                >Discord</a
              >
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                >Products FAQ</a
              >
              <a class="line-height-3 text-xl block cursor-pointer text-700"
                >Docs</a
              >
            </div>

            <div class="col-12 md:col-4 mt-4 md:mt-0">
              <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                Social Media
              </h4>
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                ><i class="pi pi-facebook"></i> Facebook</a
              >
              <a
                class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                ><i class="pi pi-youtube"></i> YouTube</a
              >
              <a class="line-height-3 text-xl block cursor-pointer text-700"
                ><i class="pi pi-twitter"></i> Twitter</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  navService = inject(NavService)
}
