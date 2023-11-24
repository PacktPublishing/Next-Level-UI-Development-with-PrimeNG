import { Injectable } from '@angular/core'
import { PRODUCTS } from '@primengbook/shared/data-access'

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  getProducts() {
    return PRODUCTS.slice(0, 5)
  }

  purchase() {
    // mimic purchase event
    console.log('purchase')
  }
}
