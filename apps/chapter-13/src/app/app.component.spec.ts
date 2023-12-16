import { TestBed } from '@angular/core/testing'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
      providers: [provideNoopAnimations()],
    }).compileComponents()
  })

  it('should render title', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent)
    const compiled = fixture.nativeElement as HTMLElement

    // Act
    fixture.detectChanges()

    // Assert
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to chapter-13'
    )
  })
})
