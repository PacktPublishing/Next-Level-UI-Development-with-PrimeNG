import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PRODUCTS } from '@primengbook/shared/data-access'
import { InputTextModule } from 'primeng/inputtext'
import { ProductListDeferComponent } from './product-list-defer.component'
import { ProductListComponent } from './product-list.component'

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h2>Products</h2>

    {{ changeDetectionTriggered() }}

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

    <primengbook-product-list-defer />
  `,
  imports: [
    CommonModule,
    ProductListComponent,
    FormsModule,
    InputTextModule,
    ProductListDeferComponent,
  ],
})
export default class ProductsComponent {
  filteredProducts = PRODUCTS.slice(0, 25)

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

  changeDetectionTriggered() {
    console.log('PRODUCTS - CD Triggered')
  }
}
