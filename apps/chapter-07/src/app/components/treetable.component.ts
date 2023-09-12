import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PRODUCTS_TREETABLENODE } from '@primengbook/shared/data-access'
import { TreeTableNode } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { TreeTableModule, TreeTableNodeCollapseEvent } from 'primeng/treetable'

@Component({
  standalone: true,
  imports: [CommonModule, TreeTableModule, ButtonModule],
  template: `
    <h2>TreeTable</h2>

    <h3>Basic TreeTable</h3>

    <p-treeTable
      [value]="products"
      [scrollable]="true"
      [tableStyle]="{ 'min-width': '50rem' }"
    >
      <ng-template pTemplate="header">
        <tr>
          <th>Name</th>
          <th>Price (USD)</th>
          <th>Rating</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowNode let-product="rowData">
        <tr [ttRow]="rowNode">
          <td>
            <p-treeTableToggler [rowNode]="rowNode" />
            {{ product.name }}
          </td>
          <td>{{ product?.price | currency }}</td>
          <td>{{ product?.rating }}</td>
        </tr>
      </ng-template>
    </p-treeTable>

    <h3>TreeTable Dynamic Columns</h3>

    <div class="grid gap-4 ml-0 mb-4">
      <button (click)="updateColumns('RATING')" pButton label="Rating"></button>

      <button
        (click)="updateColumns('QUANTITY')"
        pButton
        label="Quantity"
      ></button>
    </div>

    <p-treeTable
      [value]="products"
      [columns]="cols"
      [scrollable]="true"
      [tableStyle]="{ 'min-width': '50rem' }"
    >
      <ng-template pTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns">
            {{ col.header }}
          </th>
        </tr>
      </ng-template>
      <ng-template
        pTemplate="body"
        let-rowNode
        let-product="rowData"
        let-columns="columns"
      >
        <tr>
          <td *ngFor="let col of columns; let i = index">
            <p-treeTableToggler [rowNode]="rowNode" *ngIf="i === 0" />
            {{ product[col.field] }}
          </td>
        </tr>
      </ng-template>
    </p-treeTable>

    <h3>TreeTable with Paginator</h3>

    <p-treeTable
      [value]="products"
      [scrollable]="true"
      [paginator]="true"
      [rows]="2"
      [tableStyle]="{ 'min-width': '50rem' }"
    >
      <ng-template pTemplate="header">
        <tr>
          <th>Name</th>
          <th>Price (USD)</th>
          <th>Rating</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowNode let-product="rowData">
        <tr [ttRow]="rowNode">
          <td>
            <p-treeTableToggler [rowNode]="rowNode" />
            {{ product.name }}
          </td>
          <td>{{ product?.price | currency }}</td>
          <td>{{ product?.rating }}</td>
        </tr>
      </ng-template>
    </p-treeTable>

    <h3>TreeTable with Events</h3>

    <p-treeTable
      [value]="products"
      [scrollable]="true"
      (onNodeCollapse)="handleNodeCollapse($event)"
      [tableStyle]="{ 'min-width': '50rem' }"
    >
      <ng-template pTemplate="header">
        <tr>
          <th>Name</th>
          <th>Price (USD)</th>
          <th>Rating</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowNode let-product="rowData">
        <tr [ttRow]="rowNode">
          <td>
            <p-treeTableToggler [rowNode]="rowNode" />
            {{ product.name }}
          </td>
          <td>{{ product?.price | currency }}</td>
          <td>{{ product?.rating }}</td>
        </tr>
      </ng-template>
    </p-treeTable>
  `,
})
export default class TreeTableComponent {
  products: TreeTableNode[] = structuredClone(PRODUCTS_TREETABLENODE)

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'rating', header: 'Rating' },
  ]

  updateColumns(category: string) {
    switch (category) {
      case 'RATING':
        this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'price', header: 'Price' },
          { field: 'rating', header: 'Rating' },
        ]
        break

      case 'QUANTITY':
        this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'price', header: 'Price' },
          { field: 'quantity', header: 'Quantity' },
        ]
        break

      default:
        break
    }
  }

  handleNodeCollapse(event: TreeTableNodeCollapseEvent) {
    const collapsedNodeData = event.node.data
    // Handle actions when a node is collapsed
    console.log(collapsedNodeData)
  }
}
