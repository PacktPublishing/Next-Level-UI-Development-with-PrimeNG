import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PRODUCTS } from '@primengbook/shared/data-access'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { TableModule } from 'primeng/table'

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
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
  ],
  template: `
    <h2>Table</h2>

    <h3>Basic Table</h3>
    <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product>
        <tr>
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </ng-template>
    </p-table>

    <h3>Dynamic Columns</h3>
    <p-table
      [columns]="cols"
      [value]="products"
      [tableStyle]="{ 'min-width': '50rem' }"
    >
      <ng-template pTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns">
            {{ col.header }}
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
          <td *ngFor="let col of columns">
            {{ rowData[col.field] }}
          </td>
        </tr>
      </ng-template>
    </p-table>

    <h3>Sorting</h3>
    <p-table [value]="products">
      <ng-template pTemplate="header">
        <tr>
          <th pSortableColumn="name">
            Name
            <p-sortIcon field="name"></p-sortIcon>
          </th>
          <th pSortableColumn="price">
            Price
            <p-sortIcon field="price"></p-sortIcon>
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product>
        <tr>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </ng-template>
    </p-table>

    <h3>Filtering</h3>
    <p-table [value]="products" [globalFilterFields]="['name', 'price']" #dt>
      <ng-template pTemplate="caption">
        <div class="flex">
          <button
            pButton
            label="Clear"
            class="p-button-outlined"
            icon="pi pi-filter-slash"
            (click)="dt.clear()"
          ></button>
          <span class="p-input-icon-left ml-auto">
            <i class="pi pi-search"></i>
            <input
              pInputText
              type="text"
              (input)="dt.filterGlobal($event.target.value, 'contains')"
              placeholder="Search keyword"
            />
          </span>
        </div>
      </ng-template>

      <ng-template pTemplate="header">
        <tr>
          <th>
            <input
              pInputText
              type="text"
              (input)="dt.filter($event.target.value, 'name', 'contains')"
              placeholder="Search by name"
            />
          </th>
          <th>
            <input
              pInputText
              type="text"
              (input)="dt.filter($event.target.value, 'price', 'equals')"
              placeholder="Search by price"
            />
          </th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-product>
        <tr>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </ng-template>

      <ng-template pTemplate="emptymessage">
        <tr>
          <td colspan="7">No products found.</td>
        </tr>
      </ng-template>
    </p-table>

    <h3>Paginator</h3>
    <p-table
      [value]="fullProducts"
      [paginator]="true"
      [rows]="10"
      [rowsPerPageOptions]="[5,10,20]"
      [tableStyle]="{ 'min-width': '50rem' }">
      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product>
        <tr>
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
})
export default class TableComponent {
  // only take 5 items from the PRODUCTS
  products: Product[] = PRODUCTS.slice(0, 5)
  fullProducts: Product[] = PRODUCTS

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
  ]
}
