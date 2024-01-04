import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { UserService } from '../../shared/services'

@Component({
  selector: 'primengbook-angular-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Angular Services</h2>
    <ul>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ul>
  `,
})
export class AngularServicesComponent {
  private userService = inject(UserService)
  users$ = this.userService.getUsers()
}
