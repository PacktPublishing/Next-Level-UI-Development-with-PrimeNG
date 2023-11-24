import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { InputTextModule } from 'primeng/inputtext'
import { TableModule } from 'primeng/table'
import { ToastModule } from 'primeng/toast'
import { ShopService } from '../../shared/services'

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
  selector: 'primengbook-spy',
  standalone: true,
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextModule,
  ],
  providers: [ConfirmationService, MessageService],
  template: `
    <h2>Tips</h2>

    <p-toast />
    <p-confirmDialog [style]="{ width: '50vw' }" />

    <p-table
      [value]="products"
      dataKey="id"
      editMode="row"
      [tableStyle]="{ 'min-width': '50rem' }"
    >
      <ng-template pTemplate="header">
        <tr>
          <th style="width:20%">ID</th>
          <th style="width:20%">Name</th>
          <th style="width:20%">Price</th>
          <th style="width:20%">Quantity</th>
          <th style="width:20%"></th>
        </tr>
      </ng-template>
      <ng-template
        pTemplate="body"
        let-product
        let-editing="editing"
        let-ri="rowIndex"
      >
        <tr [pEditableRow]="product">
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input pInputText type="text" [(ngModel)]="product.id" />
              </ng-template>
              <ng-template pTemplate="output">
                {{ product.id }}
              </ng-template>
            </p-cellEditor>
          </td>
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input
                  pInputText
                  type="text"
                  [(ngModel)]="product.name"
                  required
                />
              </ng-template>
              <ng-template pTemplate="output">
                {{ product.name }}
              </ng-template>
            </p-cellEditor>
          </td>
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input pInputText type="text" [(ngModel)]="product.price" />
              </ng-template>
              <ng-template pTemplate="output">
                {{ product.price | currency : 'USD' }}
              </ng-template>
            </p-cellEditor>
          </td>
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input
                  pInputText
                  type="text"
                  [(ngModel)]="product.quantity"
                  required
                />
              </ng-template>
              <ng-template pTemplate="output">
                {{ product.quantity }}
              </ng-template>
            </p-cellEditor>
          </td>
          <td>
            <div class="flex align-items-center justify-content-center gap-2">
              <button
                *ngIf="!editing"
                pButton
                pRipple
                type="button"
                pInitEditableRow
                icon="pi pi-pencil"
                (click)="onRowEditInit(product)"
                class="p-button-rounded p-button-text"
              ></button>
              <button
                *ngIf="!editing"
                pButton
                pRipple
                type="button"
                icon="pi pi-trash"
                (click)="onRowDelete(ri)"
                class="p-button-rounded p-button-text p-button-danger"
              ></button>
              <button
                *ngIf="editing"
                pButton
                pRipple
                type="button"
                pSaveEditableRow
                icon="pi pi-check"
                (click)="onRowEditSave(product)"
                class="p-button-rounded p-button-text p-button-success mr-2"
              ></button>
              <button
                *ngIf="editing"
                pButton
                pRipple
                type="button"
                pCancelEditableRow
                icon="pi pi-times"
                (click)="onRowEditCancel(product, ri)"
                class="p-button-rounded p-button-text p-button-danger"
              ></button>
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [],
})
export class TipsComponent {
  private shopService = inject(ShopService)
  private confirmationService = inject(ConfirmationService)
  private messageService = inject(MessageService)

  products = this.shopService.getProducts()
  clonedProducts: { [s: string]: Product } = {}

  onRowDelete(index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Your product is deleted',
        })

        this.products.splice(index, 1)
      },
      reject: (type: ConfirmEventType) => {
        // console.log({ type })
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            })
            break
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            })
            break
        }
      },
    })
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id] = { ...product }
  }

  onRowEditSave(product: Product) {
    if (product.price > 0) {
      delete this.clonedProducts[product.id]
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product is updated',
      })
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid Price',
      })
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id]
    delete this.clonedProducts[product.id]
  }
}
