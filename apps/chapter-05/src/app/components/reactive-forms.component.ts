import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Reactive Forms</h2>

    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="first" (ngSubmit)="onSubmit()" />
      <button type="submit">Submit</button>
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
