import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'primengbook-angular-control-flow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Angular Control Flow</h2>

    <!-- Before Control Flow -->
    <!-- <div *ngIf="products.length; else noProducts">Show product list</div>
    <ng-template #noProducts> Products are empty! </ng-template> -->

    <!-- After Control Flow -->
    @if (products.length) { Show product list } @else { Products are empty! }
  `,
})
export class AngularControlFlowComponent {
  products = []
}
