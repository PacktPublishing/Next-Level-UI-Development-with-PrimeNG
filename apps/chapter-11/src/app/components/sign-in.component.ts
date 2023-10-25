import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { InputTextModule } from 'primeng/inputtext'

@Component({
  selector: 'primengbook-sign-in',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, CheckboxModule],
  template: `
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3"
          >Don't have an account?</span
        >
        <a
          href="/sign-up"
          class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >Create today!</a
        >
      </div>

      <div>
        <div class="p-inputgroup mb-3">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <input id="username" type="text" pInputText placeholder="Username" />
        </div>

        <div class="p-inputgroup mb-3">
          <span class="p-inputgroup-addon">
            <i class="pi pi-lock"></i>
          </span>
          <input
            id="password"
            type="password"
            pInputText
            placeholder="Password"
          />
        </div>

        <div class="flex align-items-center justify-content-between mb-5">
          <div class="flex align-items-center">
            <p-checkbox
              id="rememberme"
              [binary]="true"
              class="mr-2"
            ></p-checkbox>
            <label for="rememberme" class="text-900">Remember me</label>
          </div>
          <a
            href="/forgot-password"
            class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
            >Forgot password?</a
          >
        </div>

        <button pButton type="button" label="Sign In" class="w-full"></button>
      </div>
    </div>
  `,
})
export default class SignInComponent {}
