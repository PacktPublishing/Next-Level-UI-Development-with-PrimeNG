import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'primengbook-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
      <div class="grid justify-content-center">
        <div class="col-12 text-center mt-8 mb-4">
          <h2 class="text-900 font-normal mb-2">Our Features</h2>
          <span class="text-600 text-2xl">Discover What Sets Us Apart</span>
        </div>

        <div
          class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          *ngFor="let feature of features"
        >
          <div
            style="height:180px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2));"
          >
            <div class="p-3 surface-card h-full" style="border-radius:8px;">
              <div
                class="flex align-items-center justify-content-center {{
                  feature.bg
                }} mb-3"
                style="width:3.5rem;height:3.5rem; border-radius:10px;"
              >
                <i class="{{ feature.icon }} text-2xl text-yellow-700"></i>
              </div>
              <h5 class="mb-2 text-900">{{ feature.heading }}</h5>
              <span class="text-600">{{ feature.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class FeaturesComponent {
  features = [
    {
      heading: 'Intuitive Interface',
      content: 'User-friendly design with seamless navigation.',
      icon: 'pi pi-cog',
      bg: 'bg-yellow-200',
    },
    {
      heading: 'Powerful Analytics',
      content: 'Gain insights with robust analytics tools.',
      icon: 'pi pi-chart-bar',
      bg: 'bg-green-200',
    },
    {
      heading: 'Customization Options',
      content: 'Tailor the platform to your unique needs.',
      icon: 'pi pi-palette',
      bg: 'bg-blue-200',
    },
    {
      heading: 'Responsive Design',
      content: 'Access anywhere with a consistent experience.',
      icon: 'pi pi-tablet',
      bg: 'bg-orange-200',
    },
    {
      heading: 'Secure & Reliable',
      content: 'Rest easy with prioritized security.',
      icon: 'pi pi-lock',
      bg: 'bg-red-200',
    },
    {
      heading: 'Real-time Collaboration',
      content: 'Enhance teamwork with seamless collaboration.',
      icon: 'pi pi-users',
      bg: 'bg-purple-200',
    },
  ]
}
