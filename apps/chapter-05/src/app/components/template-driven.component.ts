import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Template Driven Form</h2>

    <form #form="ngForm" (ngSubmit)="onSubmit(form)" novalidate>
      <input name="first" ngModel required />
      <button>Submit</button>
    </form>

    <p>Value: {{ form.value | json }}</p>
  `,
})
export default class TemplateDrivenComponent {
  onSubmit(form: NgForm) {
    console.log(form.value) // { first: '' }
  }
}
