import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularTestingsComponent } from './angular-testings.component'

describe('AngularTestingsComponent', () => {
  let component: AngularTestingsComponent
  let fixture: ComponentFixture<AngularTestingsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTestingsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AngularTestingsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render user list', () => {
    component.users = ['John', 'Jane', 'Doe']
    fixture.detectChanges()
    const userList = fixture.nativeElement.querySelector('ul')
    expect(userList.textContent).toContain('John')
    expect(userList.textContent).toContain('Jane')
    expect(userList.textContent).toContain('Doe')
  })
})
