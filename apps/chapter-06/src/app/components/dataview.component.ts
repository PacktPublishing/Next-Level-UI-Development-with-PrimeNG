import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PRODUCTS } from '@primengbook/shared/data-access'
import { ButtonModule } from 'primeng/button'
import { DataViewModule } from 'primeng/dataview'
import { DropdownModule } from 'primeng/dropdown'

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
  imports: [CommonModule, DataViewModule, DropdownModule, ButtonModule],
  template: `
    <h2>DataView</h2>

    <h3>Basic DataView</h3>

    <p-dataView [value]="shortProducts">
      <ng-template pTemplate="list" let-products>
        <div class="col-12" *ngFor="let product of products">
          <div
            class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
          >
            <!-- <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src="assets/placeholder.png" [alt]="product.name" /> -->
            <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
            >
              <div
                class="flex flex-column align-items-center sm:align-items-start gap-3"
              >
                <div class="text-2xl font-bold text-900">
                  {{ product.name }}
                </div>
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
                <span class="text-2xl font-semibold">{{
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
        </div>
      </ng-template>
    </p-dataView>

    <h3>DataView with Sorting & Pagination</h3>

    <p-dataView
      [value]="products"
      [rows]="4"
      [paginator]="true"
      [sortField]="sortField"
      [sortOrder]="sortOrder"
    >
      <ng-template pTemplate="header">
        <div class="flex flex-column md:flex-row md:justify-content-between">
          <p-dropdown
            [options]="sortOptions"
            [(ngModel)]="sortKey"
            placeholder="Sort By Price"
            (onChange)="onSortChange($event)"
            styleClass="mb-2 md:mb-0"
          />
        </div>
      </ng-template>

      <ng-template pTemplate="list" let-products>
        <div class="col-12" *ngFor="let product of products">
          <div
            class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
          >
            <!-- <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src="assets/placeholder.png" [alt]="product.name" /> -->
            <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
            >
              <div
                class="flex flex-column align-items-center sm:align-items-start gap-3"
              >
                <div class="text-2xl font-bold text-900">
                  {{ product.name }}
                </div>
                <p-rating
                  [(ngModel)]="product.rating"
                  [readonly]="true"
                  [cancel]="false"
                ></p-rating>
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
                <span class="text-2xl font-semibold">{{
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
        </div>
      </ng-template>
    </p-dataView>
  `,
})
export default class DataViewComponent {
  // only take 5 items from the PRODUCTS
  shortProducts: Product[] = PRODUCTS.slice(0, 3)
  products: Product[] = PRODUCTS

  sortOptions = [
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' },
  ]

  sortOrder!: number
  sortField!: string

  onSortChange(event: HTMLInputElement) {
    const value = event.value

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1
      this.sortField = value.substring(1, value.length)
    } else {
      this.sortOrder = 1
      this.sortField = value
    }
  }
}
