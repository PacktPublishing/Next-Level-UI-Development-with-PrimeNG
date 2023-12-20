import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'primengbook-root',
  template: ` <h1>Welcome to chapter-14</h1>
    <router-outlet />`,
  styles: ``,
})
export class AppComponent {}
