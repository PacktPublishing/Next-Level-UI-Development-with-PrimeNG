import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { ConfirmationService, MessageService } from 'primeng/api'
import { ConfirmDialog } from 'primeng/confirmdialog'
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
  let confirmService: ConfirmationService
  let messageService: MessageService
  let confirmDialog: ConfirmDialog

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsComponent],
      providers: [
        provideNoopAnimations(),
        {
          provide: ShopService,
          useValue: {
            getProducts: jest.fn().mockReturnValue(productsStub),
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(TipsComponent)
    component = fixture.componentInstance
    confirmService = fixture.debugElement.injector.get(ConfirmationService)
    messageService = fixture.debugElement.injector.get(MessageService)

    confirmDialog = fixture.debugElement.query(
      By.css('p-confirmdialog')
    ).componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show table content', () => {
    fixture.detectChanges()

    const table = fixture.debugElement.query(By.css('p-table')).nativeElement
    expect(table.textContent).toContain('Product 1')
    expect(table.textContent).toContain('Product 2')
  })

  it('should show confirmation on delete', () => {
    const confirmSpy = jest.spyOn(confirmService, 'confirm')
    component.onRowDelete(1)
    fixture.detectChanges()
    expect(confirmSpy).toHaveBeenCalled()
  })

  it('should show accept message on delete', () => {
    const messageSpy = jest.spyOn(messageService, 'add')

    component.onRowDelete(1)
    fixture.detectChanges()

    confirmDialog.accept()

    expect(messageSpy).toHaveBeenCalledWith({
      severity: 'info',
      summary: 'Confirmed',
      detail: 'Your product is deleted',
    })
  })

  it('should show reject message on delete', () => {
    const messageSpy = jest.spyOn(messageService, 'add')

    component.onRowDelete(1)
    fixture.detectChanges()

    confirmDialog.reject()

    expect(messageSpy).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Rejected',
      detail: 'You have rejected',
    })
  })

  it('should show close message on delete', fakeAsync(() => {
    const messageSpy = jest.spyOn(messageService, 'add')

    component.onRowDelete(1)
    fixture.detectChanges()

    tick(300)

    // Send Escape event
    const escapeEvent: any = document.createEvent('CustomEvent')
    escapeEvent.which = 27
    escapeEvent.initEvent('keydown', true, true)
    document.dispatchEvent(escapeEvent as KeyboardEvent)

    expect(messageSpy).toHaveBeenCalledWith({
      severity: 'warn',
      summary: 'Cancelled',
      detail: 'You have cancelled',
    })

    flush()
  }))
})
