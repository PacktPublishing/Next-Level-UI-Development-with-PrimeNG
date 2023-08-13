import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PRODUCTS } from '@primengbook/shared/data-access'
import { ButtonModule } from 'primeng/button'
import { OrderListModule } from 'primeng/orderlist'

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
  imports: [CommonModule, OrderListModule, ButtonModule],
  template: `
    <h2>OrderList</h2>

    <h3>Basic OrderList</h3>

    <p-orderList
      [value]="products"
      [listStyle]="{ 'max-height': '30rem' }"
      header="Products"
    >
      <ng-template let-product pTemplate="item">
        <div class="flex flex-column xl:flex-row xl:align-items-start gap-4">
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
              <span class="text-xl font-semibold">{{
                '$' + product.price
              }}</span>
              <button
                pButton
                icon="pi pi-shopping-cart"
                class="md:align-self-end mb-2 p-button-rounded"
              ></button>
            </div>
          </div>
        </div>
      </ng-template>
    </p-orderList>

    <h3>OrderList with Filtering</h3>

    <p-orderList
      [value]="products"
      [listStyle]="{ 'max-height': '30rem' }"
      header="Products"
      filterBy="name"
      filterPlaceholder="Filter by name"
    >
      <ng-template let-product pTemplate="item">
        <div class="flex flex-column xl:flex-row xl:align-items-start gap-4">
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
              <span class="text-xl font-semibold">{{
                '$' + product.price
              }}</span>
              <button
                pButton
                icon="pi pi-shopping-cart"
                class="md:align-self-end mb-2 p-button-rounded"
              ></button>
            </div>
          </div>
        </div>
      </ng-template>
    </p-orderList>

    <h3>OrderList with Drag and Drop</h3>

    <p-orderList
      [value]="products"
      [listStyle]="{ 'max-height': '30rem' }"
      header="Products"
      [dragdrop]="true"
    >
      <ng-template let-product pTemplate="item">
        <div class="flex flex-column xl:flex-row xl:align-items-start gap-4">
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
              <span class="text-xl font-semibold">{{
                '$' + product.price
              }}</span>
              <button
                pButton
                icon="pi pi-shopping-cart"
                class="md:align-self-end mb-2 p-button-rounded"
              ></button>
            </div>
          </div>
        </div>
      </ng-template>
    </p-orderList>
  `,
})
export default class OrderListComponent {
  products: Product[] = PRODUCTS
}
