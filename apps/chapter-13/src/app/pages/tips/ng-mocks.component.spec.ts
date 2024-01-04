import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { MockInstance, MockProvider } from 'ng-mocks'
import { ShopService } from '../../shared/services'
import { TipsComponent } from './tips.component'

const productsStub = [
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
  let component: TipsComponent
  let fixture: ComponentFixture<TipsComponent>

  beforeAll(() =>
    MockInstance(ShopService, () => ({
      getProducts: () => productsStub,
    }))
  )

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsComponent],
      providers: [provideNoopAnimations(), MockProvider(ShopService)],
    }).compileComponents()

    fixture = TestBed.createComponent(TipsComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show table content', () => {
    const table = fixture.debugElement.query(By.css('p-table')).nativeElement
    expect(table?.textContent).toContain('Product 1')
    expect(table?.textContent).toContain('Product 2')
  })
})
