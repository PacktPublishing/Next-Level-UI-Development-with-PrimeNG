import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { InputMaskModule } from 'primeng/inputmask'
import { InputTextModule } from 'primeng/inputtext'
import { RadioButtonModule } from 'primeng/radiobutton'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // PrimeNg Modules
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    InputMaskModule,
  ],
  template: `
    <h2>Contact Form</h2>

    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input pInputText id="name" type="text" formControlName="name" />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <p-inputMask
          id="phone"
          mask="(999)-999-9999"
          formControlName="phone"
          placeholder="(999)-999-9999"
        />
      </div>

      <div class="form-group">
        <p-checkbox
          formControlName="subscribe"
          [binary]="true"
          label="Subscribe to newsletter"
        />
      </div>

      <div class="form-group">
        <label>Gender</label>
        <p-radioButton
          *ngFor="let gender of genders"
          name="gender"
          value="{{ gender.value }}"
          label="{{ gender.name }}"
          formControlName="gender"
        />
      </div>

      <button pButton type="submit">Submit</button>
    </form>

    <p>Value: {{ contactForm.value | json }}</p>
  `,
  styles: [
    `
      .form-group {
        margin: 2rem 0;
      }

      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      p-radioButton {
        padding-right: 1rem;
      }
    `,
  ],
})
export default class ContactComponent {
  private formBuilder = inject(FormBuilder)

  contactForm = this.formBuilder.group({
    name: [''],
    phone: [''],
    subscribe: [false],
    gender: [''],
  })

  genders: { name: string; value: string }[] = [
    { name: 'Male', value: 'M' },
    { name: 'Female', value: 'F' },
    { name: 'Other', value: 'O' },
  ]

  onSubmit() {
    console.log(this.contactForm.value)
  }
}
