import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { invalidNameValidator } from '@primengbook/shared/ui'
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { InputMaskModule } from 'primeng/inputmask'
import { InputTextModule } from 'primeng/inputtext'
import { RadioButtonModule } from 'primeng/radiobutton'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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

    <h3>Template Driven Form Validation</h3>

    <form #form="ngForm" (ngSubmit)="onSubmitTemplate(form)" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          pInputText
          name="first"
          ngModel
          required
          minlength="4"
          #name="ngModel"
        />

        <ng-container *ngIf="name.invalid && (name.dirty || name.touched)">
          <div class="p-error" *ngIf="name.errors?.['required']">
            This field is required
          </div>
          <div class="p-error" *ngIf="name.errors?.['minlength']">
            Name must be at least 4 characters long.
          </div>
        </ng-container>
      </div>

      <button pButton type="submit">Submit</button>
    </form>

    <h3>Reactive Forms Validation</h3>

    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input pInputText id="name" type="text" formControlName="name" />
        <ng-container *ngIf="contactForm.controls.name as name">
          <div class="p-error" *ngIf="name.dirty && name.hasError('required')">
            This field is required
          </div>
          <div class="p-error" *ngIf="name.dirty && name.hasError('minlength')">
            Name must be at least 4 characters long.
          </div>
          <div
            class="p-error"
            *ngIf="name.dirty && name.hasError('invalidName')"
          >
            Name cannot be "{{ name.errors?.['invalidName'].value }}".
          </div>
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
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        // custom validator
        invalidNameValidator(/test/i),
      ],
    ],
    phone: ['', Validators.required],
    subscribe: [false],
    gender: ['', Validators.required],
  })

  genders: { name: string; value: string }[] = [
    { name: 'Male', value: 'M' },
    { name: 'Female', value: 'F' },
    { name: 'Other', value: 'O' },
  ]

  onSubmitTemplate(form: NgForm) {
    console.log(form.value)
  }

  onSubmit() {
    console.log(this.contactForm)
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsDirty()
      })
    }
  }
}
