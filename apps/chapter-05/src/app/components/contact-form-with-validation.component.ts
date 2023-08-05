import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
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
    <h2>Contact Form with Validation</h2>

    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input pInputText id="name" type="text" formControlName="name" />
        <ng-container *ngIf="contactForm.controls.name as name">
          <small
            class="p-error"
            *ngIf="name.dirty && name.hasError('required')"
          >
            This field is required
          </small>
          <small
            class="p-error"
            *ngIf="name.dirty && name.hasError('minlength')"
          >
            The name is too short
          </small>
        </ng-container>
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <p-inputMask
          id="phone"
          mask="(999)-999-9999"
          formControlName="phone"
          placeholder="(999)-999-9999"
        />
        <ng-container *ngIf="contactForm.controls.phone as phone">
          <small
            class="p-error"
            *ngIf="phone.dirty && phone.hasError('required')"
          >
            This field is required
          </small>
        </ng-container>
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

        <ng-container *ngIf="contactForm.controls.gender as gender">
          <small
            class="p-error"
            *ngIf="gender.dirty && gender.hasError('required')"
          >
            This field is required
          </small>
        </ng-container>
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

      small {
        display: block;
        margin-top: 0.5rem;
      }
    `,
  ],
})
export default class ContactWithValidationComponent {
  private formBuilder = inject(FormBuilder)

  contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', Validators.required],
    subscribe: [false],
    gender: ['', Validators.required],
  })

  genders: { name: string; value: string }[] = [
    { name: 'Male', value: 'M' },
    { name: 'Female', value: 'F' },
    { name: 'Other', value: 'O' },
  ]

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsDirty()
      })
    }
  }
}
