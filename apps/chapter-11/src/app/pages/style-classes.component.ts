import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { StyleClassModule } from 'primeng/styleclass'

@Component({
  standalone: true,
  template: `
    <h2>Style Classes</h2>

    <h3>Toggle Classes</h3>

    <p-button
      pStyleClass="@next"
      toggleClass="dark-mode"
      label="Toggle Dark Mode"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <h3>Animation</h3>
    <button
      pButton
      label="Show"
      pStyleClass=".box"
      enterClass="hidden"
      enterActiveClass="fadein"
    ></button>
    <button
      pButton
      label="Hide"
      pStyleClass=".box"
      leaveActiveClass="fadeout"
      leaveToClass="hidden"
    ></button>

    <div class=" animation-duration-500 box">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  `,
  imports: [CommonModule, StyleClassModule, ButtonModule],
  styles: [
    `
      p {
        background-color: var(--primary-color);
        color: var(--primary-color-text);
        padding: 2rem;
      }
      .dark-mode {
        background-color: black;
        color: white;
      }
    `,
  ],
})
export default class StyleClassComponent {}
