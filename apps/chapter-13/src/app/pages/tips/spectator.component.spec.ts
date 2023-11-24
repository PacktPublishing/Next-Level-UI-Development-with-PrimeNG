import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator/jest'
import { ShopService } from '../../shared/services'
import { TipsComponent } from './tips.component'

const mockProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'Description for Product 1',
    quantity: 50,
    rating: 4.5,
    category: 'Category 1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15.99,
    description: 'Description for Product 2',
    quantity: 50,
    rating: 3.8,
    category: 'Category 2',
  },
]

describe('TipsComponent', () => {
  let spectator: Spectator<TipsComponent>

  const createComponent = createComponentFactory({
    component: TipsComponent,
    providers: [
      mockProvider(ShopService, {
        getProducts: () => mockProducts,
      }),
    ],
  })

  beforeEach(() => {
    spectator = createComponent()
  })

  it('should create', () => {
    expect(spectator.component).toBeTruthy()
  })

  it('should show table content', () => {
    const table = spectator.query('p-table')
    expect(table?.textContent).toContain('Product 1')
    expect(table?.textContent).toContain('Product 2')
  })
})
