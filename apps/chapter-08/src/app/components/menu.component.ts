import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MegaMenuItem, MenuItem } from 'primeng/api'
import { BreadcrumbModule } from 'primeng/breadcrumb'
import { ContextMenuModule } from 'primeng/contextmenu'
import { MegaMenuModule } from 'primeng/megamenu'
import { MenuModule } from 'primeng/menu'
import { MenubarModule } from 'primeng/menubar'
import { TieredMenuModule } from 'primeng/tieredmenu'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    ContextMenuModule,
    TieredMenuModule,
    BreadcrumbModule,
  ],
  template: `
    <h2>Menus</h2>

    <h3>Basic Menu</h3>

    <p-menu [model]="menuItems" />

    <h3>Menubar</h3>

    <p-menubar [model]="menuItems" />

    <h3>Megamenu</h3>

    <p-megaMenu [model]="megaMenuItems" />

    <h3>ContextMenu</h3>

    <img
      #img
      src="assets/placeholder.png"
      alt="Product"
      aria-haspopup="true"
      class="max-w-full"
    />
    <p-contextMenu [target]="img" [model]="contextMenuItems" />

    <h3>TieredMenu</h3>

    <p-tieredMenu [model]="tieredMenus" />

    <h3>Breadcrumb</h3>

    <p-breadcrumb [model]="breadcrumbItems" />
  `,
})
export default class MenuComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Electronics',
      items: [
        {
          label: 'Computers',
          // mimic current active menu
          routerLink: '/menu',
        },
        { label: 'Smartphones', routerLink: '/products/smartphones' },
        { label: 'Televisions', routerLink: '/products/televisions' },
      ],
    },
    {
      label: 'Clothing',
      items: [
        { label: 'Men', routerLink: '/products/clothing/men' },
        { label: 'Women', routerLink: '/products/clothing/women' },
        { label: 'Kids', routerLink: '/products/clothing/kids' },
      ],
    },
  ]

  megaMenuItems: MegaMenuItem[] = [
    {
      label: 'Categories',
      items: [
        [
          {
            label: 'Electronics',
            items: [
              { label: 'Laptops', routerLink: '/electronics/laptops' },
              { label: 'Cameras', routerLink: '/electronics/cameras' },
            ],
          },
          {
            label: 'Fashion',
            items: [
              { label: 'Men', routerLink: '/fashion/men' },
              { label: 'Women', routerLink: '/fashion/women' },
            ],
          },
        ],
        [
          {
            label: 'Home & Living',
            items: [
              { label: 'Furniture', routerLink: '/home/furniture' },
              { label: 'Decor', routerLink: '/home/decor' },
            ],
          },
        ],
      ],
    },
  ]

  contextMenuItems: MenuItem[] = [
    {
      label: 'View Details',
      icon: 'pi pi-search',
      command: (event) => this.viewProduct(event.item as MenuItem),
    },
    {
      label: 'Add to Cart',
      icon: 'pi pi-shopping-cart',
      command: (event) => this.addToCart(event.item as MenuItem),
    },
    {
      label: 'Add to Wishlist',
      icon: 'pi pi-heart',
      id: 'wishlist',
      command: (event) => this.addToWishlist(event.item as MenuItem),
    },
  ]

  tieredMenus: MenuItem[] = [
    {
      label: 'Electronics',
      icon: 'pi pi-tablet',
      items: [
        {
          label: 'Computers',
          icon: 'pi pi-desktop',
          items: [
            { label: 'MacBook Air', icon: 'pi pi-apple' },
            { label: 'Ultrabooks', icon: 'pi pi-desktop' },
            { label: 'Mobile Workstations', icon: 'pi pi-mobile' },
          ],
        },
        {
          label: 'Smartphones',
          icon: 'pi pi-mobile',
          items: [
            { label: 'Android', icon: 'pi pi-android' },
            { label: 'iOS', icon: 'pi pi-apple' },
          ],
        },
        { label: 'Tablets', icon: 'pi pi-tablet' },
      ],
    },
    { label: 'Appliances', icon: 'pi pi-home' },
    { label: 'Cameras', icon: 'pi pi-camera' },
  ]

  breadcrumbItems: MenuItem[] = [
    { icon: 'pi pi-home', routerLink: '/' },
    { label: 'Electronics', routerLink: '/electronics' },
    {
      label: 'Computers',
      routerLink: '/electronics/computers',
    },
    { label: 'MacBook Air', routerLink: '/electronics/computers/macbook-air' },
  ]

  viewProduct(item: MenuItem) {
    // Logic to view product details
    console.log(item)
  }

  addToCart(item: MenuItem) {
    // Logic to add product to cart
    console.log(item)
  }

  addToWishlist(item: MenuItem) {
    // Logic to add product to wishlist
    console.log(item)
  }
}
