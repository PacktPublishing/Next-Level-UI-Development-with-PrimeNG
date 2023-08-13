import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PRODUCTS } from '@primengbook/shared/data-access'
import { ButtonModule } from 'primeng/button'
import { DragDropModule } from 'primeng/dragdrop'
import { PickListModule } from 'primeng/picklist'

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
  imports: [CommonModule, DragDropModule, PickListModule, ButtonModule],
  template: `
    <h2>PickList</h2>

    <p-pickList
      [source]="products"
      [target]="selectedProducts"
      sourceHeader="Available Products"
      targetHeader="Selected Products"
      [dragdrop]="true"
      [responsive]="true"
      [sourceStyle]="{ height: '30rem' }"
      [targetStyle]="{ height: '30rem' }"
      breakpoint="1400px"
    >
      <ng-template let-product pTemplate="item">
        <!-- <img
            class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src="assets/placeholder.png"
            [alt]="product.name"
          /> -->

        <div
          class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
        >
          <div
            class="flex flex-column align-items-center sm:align-items-start gap-3"
          >
            <div class="text-xl font-bold text-700">{{ product.name }}</div>
            <div class="flex align-items-center gap-3">
              <span class="flex align-items-center gap-2">
                <i class="pi pi-tag"></i>
                <span class="font-semibold">{{ product.category }}</span>
              </span>
            </div>
          </div>
          <div
            class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
          >
            <span class="text-xl font-semibold">{{ '$' + product.price }}</span>
            <button
              pButton
              icon="pi pi-shopping-cart"
              class="md:align-self-end mb-2 p-button-rounded"
            ></button>
          </div>
        </div>
      </ng-template>
    </p-pickList>
  `,
})
export default class PickListComponent {
  products: Product[] = PRODUCTS
  selectedProducts: Product[] = []
}
