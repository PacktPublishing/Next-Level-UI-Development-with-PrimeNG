import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'primengbook-button-configuration',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <h2>Button Configuration</h2>

    <p-button
      label="Click me!"
      icon="pi pi-check"
      iconPos="right"
      [disabled]="isDisabled"
    />

    <br /><br />

    <button
      pButton
      label="Click me!"
      [loading]="loading"
      (click)="onClickEvent()"
    ></button>

    <br /><br />

    <input
      type="button"
      pButton
      value="Input Button"
      (click)="onClickEvent()"
    />
    <a href="" pButton (click)="onClickEvent()">Link Button</a>
  `,
})
export class ButtonConfigurationComponent {
  isDisabled = true
  loading = false

  onClickEvent() {
    this.loading = true

    setTimeout(() => {
      this.loading = false
    }, 20000)
  }
}
