import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  template: `
    <h2>PrimeNg Reactive Forms</h2>

    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input pInputText formControlName="first" />
      <button pButton type="submit">Submit</button>
    </form>

    <p>Value: {{ profileForm.value | json }}</p>
  `,
})
export default class ReactiveFormsComponent {
  profileForm = new FormGroup({
    first: new FormControl(''),
  })

  onSubmit() {
    console.log(this.profileForm.value) // { first: '' }
  }
}
