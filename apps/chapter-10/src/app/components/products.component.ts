import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PRODUCTS } from '@primengbook/shared/data-access'
import { DeferModule } from 'primeng/defer'
import { InputTextModule } from 'primeng/inputtext'
import { ProductService } from '../services/product.service'
import { ProductListComponent } from './product-list.component'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    FormsModule,
    InputTextModule,
    DeferModule,
  ],
  template: `
    <h2>Products</h2>
    <div class="p-input-icon-left mb-8">
      <i class="pi pi-search"></i>
      <input
        type="text"
        pInputText
        [(ngModel)]="productName"
        (keyup)="filterProduct()"
      />
    </div>
    <primengbook-product-list [products]="filteredProducts" />

    <div pDefer (onLoad)="loadAnotherProducts()">
      <ng-template>
        <primengbook-product-list [products]="anotherProducts" />
      </ng-template>
    </div>
  `,
})
export default class ProductsComponent {
  private productService = inject(ProductService)

  filteredProducts = PRODUCTS.slice(0, 25)
  anotherProducts: {
    id: number
    name: string
    price: number
    description: string
    quantity: number
    rating: number
    category: string
  }[] = []
  productName = ''

  filterProduct() {
    if (this.productName) {
      this.filteredProducts = PRODUCTS.slice(0, 25).filter((product) =>
        product.name.includes(this.productName)
      )
    } else {
      this.filteredProducts = PRODUCTS.slice(0, 25)
    }
  }

  async loadAnotherProducts() {
    // mimic loading products from API
    this.anotherProducts = this.productService.loadProducts()
  }
}
