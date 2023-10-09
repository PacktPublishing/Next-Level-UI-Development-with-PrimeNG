import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DeferModule } from 'primeng/defer'

interface Product {
  id: number
  name: string
  price: number
  description: string
  quantity: number
  rating: number
  category: string
}

@Component({
  selector: 'primengbook-product-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DeferModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid gap-4" pDefer>
      <ng-template>
        <p-card
          *ngFor="let product of products"
          [header]="product.name"
          [style]="{ width: '300px' }"
        >
          <img
            src="assets/placeholder.png"
            alt="{{ product.name }}"
            style="width:100%"
          />
          <div class="flex flex-column">
            <p>{{ product.description }}</p>
            <h3>\${{ product.price }}</h3>
            <!-- This is just to mimic the heavy calculation -->
            <p>{{ heavyOperation(product.quantity * 100) }}</p>
            <button
              pButton
              type="button"
              label="Add to Cart"
              (click)="addToCart(product)"
            ></button>
          </div>
        </p-card>
      </ng-template>
    </div>
  `,
})
export class ProductListComponent {
  @Input() products: Product[] = []

  addToCart(product: Product) {
    console.log(product)
  }

  initData() {
    console.log('onload')
  }

  trackByProductId(index: number, product: Product): number {
    console.log({ index })
    return product.id
  }

  // testing function to mimic the slowness
  heavyOperation(num: number) {
    let num1 = 0
    let num2 = 1
    let sum
    let i = 0
    for (i = 0; i < num; i++) {
      sum = num1 + num2
      num1 = num2
      num2 = sum
    }
    return num2
  }
}
