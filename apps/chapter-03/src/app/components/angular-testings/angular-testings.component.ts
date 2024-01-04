import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'primengbook-angular-testings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Angular Testings</h2>
    <p>Please check app/components/angular-testings folder for example.</p>
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  `,
})
export class AngularTestingsComponent {
  users = ['John', 'Jane', 'Doe']
}
