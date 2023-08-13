import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PRODUCTS } from '@primengbook/shared/data-access'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'

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
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <h2>Card</h2>

    <div class="grid gap-4">
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
          <button pButton type="button" label="Add to Cart"></button>
        </div>
      </p-card>
    </div>
  `,
})
export default class CardComponent {
  products: Product[] = PRODUCTS.splice(0, 10)
}
