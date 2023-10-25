import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import SignInComponent from '../components/sign-in.component'

@Component({
  standalone: true,
  template: `
    <h2>Authentication</h2>
    <primengbook-sign-in />
  `,
  imports: [CommonModule, SignInComponent],
})
export default class AuthComponent {}
