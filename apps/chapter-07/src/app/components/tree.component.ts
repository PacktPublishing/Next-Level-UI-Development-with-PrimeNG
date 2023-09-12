import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PRODUCTS_TREENODE } from '@primengbook/shared/data-access'
import { TreeNode } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { TreeModule, TreeNodeSelectEvent } from 'primeng/tree'

@Component({
  standalone: true,
  imports: [CommonModule, TreeModule, ButtonModule],
  template: `
    <h2>Tree</h2>

    <h3>Basic Tree</h3>
    <p-tree [value]="products" />

    <h3>Tree with Expanding & Collapsing</h3>
    <div class="grid gap-2 p-2 mb-2">
      <button
        pButton
        type="button"
        label="Expand all"
        (click)="expandAll()"
      ></button>
      <button
        pButton
        type="button"
        label="Collapse all"
        (click)="collapseAll()"
      ></button>
    </div>
    <p-tree [value]="productsWithExpandingAndCollapsing" />

    <h3>Node Selection Event</h3>
    <p-tree
      [value]="productsWithEvents"
      selectionMode="single"
      (onNodeSelect)="onNodeSelected($event)"
      (onNodeUnselect)="onNodeUnselected($event)"
    />

    <h3>Node Expand & Collapse Event</h3>
    <p-tree
      [value]="productsWithEvents"
      (onNodeExpand)="onNodeExpanded($event)"
      (onNodeCollapse)="onNodeCollapsed($event)"
    />

    <h3>Lazy Load Node</h3>
    <p-tree
      [loading]="loading"
      [value]="productsWithEvents"
      (onNodeExpand)="loadChildNodes($event)"
    />
  `,
})
export default class TreeComponent {
  products: TreeNode[] = structuredClone(PRODUCTS_TREENODE)
  productsWithExpandingAndCollapsing: TreeNode[] =
    structuredClone(PRODUCTS_TREENODE)

  productsWithEvents: TreeNode[] = structuredClone(PRODUCTS_TREENODE)

  loading = false

  expandAll() {
    this.productsWithExpandingAndCollapsing.forEach((node) => {
      this.expandRecursive(node, true)
    })
  }

  collapseAll() {
    this.productsWithExpandingAndCollapsing.forEach((node) => {
      this.expandRecursive(node, false)
    })
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand)
      })
    }
  }

  onNodeSelected(event: TreeNodeSelectEvent) {
    console.log(event)
  }

  onNodeUnselected(event: TreeNodeSelectEvent) {
    console.log(event)
  }

  onNodeExpanded(event: TreeNodeSelectEvent) {
    console.log(event)
  }

  onNodeCollapsed(event: TreeNodeSelectEvent) {
    console.log(event)
  }

  loadChildNodes(event: TreeNodeSelectEvent) {
    console.log(event)

    if (event.node) {
      this.loading = true

      //  this.nodeService.getChildNodes(event.node).then((nodes) => {
      //    event.node.children = nodes
      //    this.loading = true
      // })

      setTimeout(() => {
        // get node logics
        this.loading = false
      }, 200)
    }
  }
}
