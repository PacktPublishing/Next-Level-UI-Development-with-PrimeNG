import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { SampleTestComponent } from './sample-test.component'

describe('SampleTestComponent', () => {
  let component: SampleTestComponent
  let fixture: ComponentFixture<SampleTestComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTestComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SampleTestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the product title and subtitle', () => {
    fixture.detectChanges()

    const card = fixture.debugElement.query(By.css('p-card'))
    expect(card.nativeElement.textContent).toContain('Super Laptop PRO X')
    expect(card.nativeElement.textContent).toContain('Best for Nomads')
  })

  it('should have a footer', () => {
    fixture.detectChanges()

    const footerCard = fixture.debugElement.query(By.css('.p-card-footer'))
    const ctaButtons = fixture.debugElement.queryAll(By.css('.p-button'))

    expect(footerCard).toBeTruthy()
    expect(ctaButtons).toBeTruthy()
    expect(ctaButtons.length).toEqual(2)
  })
})
