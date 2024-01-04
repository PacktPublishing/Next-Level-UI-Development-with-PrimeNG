import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LandingComponent } from './pages/landing/landing.component'

@Component({
  standalone: true,
  selector: 'primengbook-root',
  template: `
    <primengbook-header />
    <main>
      <router-outlet />
    </main>
    <primengbook-footer />
  `,
  styles: ``,
  imports: [RouterOutlet, LandingComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {}
