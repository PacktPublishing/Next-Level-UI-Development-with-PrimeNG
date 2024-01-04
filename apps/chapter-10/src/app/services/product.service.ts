import { Injectable } from '@angular/core'
import { PRODUCTS } from '@primengbook/shared/data-access'

@Injectable({ providedIn: 'root' })
export class ProductService {
  loadProducts() {
    return PRODUCTS.slice(25, 50)
  }
}
