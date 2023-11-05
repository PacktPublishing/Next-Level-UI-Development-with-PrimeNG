import { Injectable } from '@angular/core'
import { PRODUCTS_TREENODE } from '@primengbook/shared/data-access'
import { TreeNode } from 'primeng/api'

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  products: TreeNode[] = structuredClone(PRODUCTS_TREENODE)

  getChildNodes(node: TreeNode) {
    return (
      this.products.find((product) => product.key === node.key)?.children || []
    )
  }
}
