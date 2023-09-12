import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { TimelineModule } from 'primeng/timeline'

@Component({
  standalone: true,
  imports: [CommonModule, TimelineModule, ButtonModule],
  template: `
    <h2>Timeline</h2>

    <h3>Basic Timeline</h3>

    <p-timeline [value]="orderStatuses">
      <ng-template pTemplate="content" let-order>
        <span [class]="order.icon"></span>
        {{ order.title }}
      </ng-template>
    </p-timeline>

    <h3>Timeline Alignment</h3>

    <p-timeline [value]="orderStatuses" align="alternate">
      <ng-template pTemplate="content" let-order>
        <span [class]="order.icon"></span>
        {{ order.title }}
      </ng-template>
    </p-timeline>

    <h3>Timeline Horizontal</h3>

    <p-timeline [value]="orderStatuses" layout="horizontal">
      <ng-template pTemplate="content" let-order>
        <div class="flex gap-1">
          <span [class]="order.icon"></span>
          {{ order.title }}
        </div>
      </ng-template>
    </p-timeline>
  `,
})
export default class TimelineComponent {
  orderStatuses = [
    {
      title: 'Order Placed',
      content: 'Your order has been received and is being processed.',
      icon: 'pi pi-shopping-cart',
    },
    {
      title: 'Order Confirmed',
      content:
        'Your payment has been confirmed and the order is now being prepared.',
      icon: 'pi pi-check-square',
    },
    {
      title: 'In Warehouse',
      content: 'Your product is in the warehouse, awaiting dispatch.',
      icon: 'pi pi-globe',
    },
    {
      title: 'Shipped',
      content:
        'Your order has been shipped and is on its way to the delivery address.',
      icon: 'pi pi-truck',
    },
    {
      title: 'Out for Delivery',
      content: 'The product is out for delivery and will reach you soon.',
      icon: 'pi pi-map-marker',
    },
    {
      title: 'Delivered',
      content: 'Your product has been successfully delivered. Enjoy!',
      icon: 'pi pi-check-circle',
    },
  ]
}
