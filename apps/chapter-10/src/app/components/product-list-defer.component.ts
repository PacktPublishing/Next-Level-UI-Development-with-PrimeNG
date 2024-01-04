import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { DeferModule } from 'primeng/defer'
import { ProductService } from '../services/product.service'
import { ProductListComponent } from './product-list.component'

@Component({
  selector: 'primengbook-product-list-defer',
  standalone: true,
  imports: [CommonModule, ProductListComponent, DeferModule],
  // Switch ChangeDetection to Default to see the effect
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>Deferred Product List</h3>
    {{ changeDetectionTriggered() }}

    <div pDefer (onLoad)="loadAnotherProducts()">
      <ng-template>
        <primengbook-product-list [products]="anotherProducts" />
      </ng-template>
    </div>
  `,
})
export class ProductListDeferComponent {
  private productService = inject(ProductService)
  anotherProducts: {
    id: number
    name: string
    price: number
    description: string
    quantity: number
    rating: number
    category: string
  }[] = []

  async loadAnotherProducts() {
    console.log(`Load another products`)
    // mimic loading products from API
    this.anotherProducts = this.productService.loadProducts()
  }

  changeDetectionTriggered() {
    console.log('PRODUCT LIST DEFERRED - CD Triggered')
  }
}
