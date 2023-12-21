import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CarouselModule } from 'primeng/carousel'

@Component({
  selector: 'primengbook-testimonials',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  template: `
    <div
      class="col-12 mt-8 mb-8 p-2 md:p-8"
      style="border-radius:20px; background:linear-gradient(50deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFA1AF 0%, #C3ECFA 100%);"
    >
      <p-carousel
        [value]="testimonials"
        [numVisible]="1"
        [numScroll]="1"
        [circular]="true"
        [autoplayInterval]="3000"
      >
        <ng-template let-testimonial pTemplate="item">
          <div class="m-2 text-center py-5 px-3">
            <div
              class="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0"
            >
              <h3 class="text-gray-900 mb-2">{{ testimonial.name }}</h3>
              <span class="text-gray-600 text-2xl">{{
                testimonial.title
              }}</span>
              <p
                class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4"
                style="max-width:800px;"
              >
                {{ testimonial.content }}”
              </p>
              <h4>Cool Company</h4>
            </div>
          </div>
        </ng-template>
      </p-carousel>
    </div>
  `,
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Alice Johnson',
      title: 'CEO',
      content:
        'Exceptional service! The team went above and beyond to meet our requirements. Highly recommended.',
      company: 'Tech Innovators Inc.',
    },
    {
      name: 'Bob Smith',
      title: 'Marketing Manager',
      content:
        'Incredible results! Our ROI has significantly improved since partnering with this outstanding team.',
      company: 'Digital Solutions Co.',
    },
    {
      name: 'Emma Davis',
      title: 'Founder',
      content:
        'A pleasure to work with! Their attention to detail and commitment to quality are truly commendable.',
      company: 'Startup Ventures Ltd.',
    },
    {
      name: 'David White',
      title: 'CTO',
      content:
        'Efficient and effective solutions. The technical expertise of this team is unmatched.',
      company: 'Innovate Tech Systems',
    },
    {
      name: 'Grace Wilson',
      title: 'Creative Director',
      content:
        'Outstanding creativity! Our brand image has been transformed, thanks to their innovative ideas.',
      company: 'Design Studio XYZ',
    },
    {
      name: 'James Carter',
      title: 'Finance Manager',
      content:
        'Reliable and trustworthy. They deliver on time and within budget, making them a valuable partner.',
      company: 'Financial Solutions Inc.',
    },
  ]
}
