import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar'

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, ButtonModule],
  template: `
    <h2>Calendar</h2>

    <form #form="ngForm" (ngSubmit)="onSubmit(form)" novalidate>
      <div class="form-group">
        <span>Default Calendar</span>
        <p-calendar ngModel name="calendar" />
      </div>

      <div class="form-group">
        <span>Calendar with Format</span>
        <p-calendar ngModel name="calendarWithFormat" dateFormat="dd-mm-yy" />
      </div>

      <div class="form-group">
        <span>Calendar With Date Range</span>
        <p-calendar ngModel name="calendarDateRange" selectionMode="range" />
      </div>

      <div class="form-group">
        <span>Calendar With Literal Text</span>
        <p-calendar
          ngModel
          name="calendarLiteralText"
          selectionMode="range"
          dateFormat="'Day: 'dd 'Month: 'MM 'Year: 'yy"
        />
      </div>

      <div class="form-group">
        <span>Calendar With Single Quote</span>
        <p-calendar
          ngModel
          name="calendarSingleQuote"
          selectionMode="range"
          dateFormat="'Today''s date is 'dd/MM/yy"
        />
      </div>

      <div class="form-group">
        <span>Calendar other format</span>
        <p-calendar
          ngModel
          name="calendarOtherFormat"
          selectionMode="range"
          dateFormat="dd+MM+yy"
        />
      </div>

      <button pButton type="submit">Submit</button>
    </form>

    <!-- <p>Value: {{ form.value | json }}</p> -->
  `,
  styles: [
    `
      .form-group {
        margin: 2rem 0;
      }

      span {
        margin-right: 1rem;
      }

      .ng-invalid.ng-touched {
        border-color: red;
      }
    `,
  ],
})
export default class CalendarComponent {
  cities = [
    { name: 'Toronto', code: 'TOR' },
    { name: 'Montreal', code: 'MTL' },
    { name: 'Vancouver', code: 'VAN' },
    { name: 'Calgary', code: 'CGY' },
    { name: 'Ottawa', code: 'OTT' },
    { name: 'Edmonton', code: 'EDM' },
    { name: 'Quebec City', code: 'QUE' },
    { name: 'Winnipeg', code: 'WIN' },
    { name: 'Hamilton', code: 'HAM' },
    { name: 'Kitchener', code: 'KIT' },
  ]

  groupedCities = [
    {
      label: 'Canada',
      value: 'ca',
      items: [
        { label: 'Vancouver', value: 'Vancouver' },
        { label: 'Toronto', value: 'Toronto' },
        { label: 'Montreal', value: 'Montreal' },
        { label: 'Ottawa', value: 'Ottawa' },
      ],
    },
    {
      label: 'Vietnam',
      value: 'vn',
      items: [
        { label: 'Ho Chi Minh City', value: 'Ho Chi Minh City' },
        { label: 'Hanoi', value: 'Hanoi' },
        { label: 'Da Nang', value: 'Da Nang' },
        { label: 'Nha Trang', value: 'Nha Trang' },
      ],
    },
  ]

  onSubmit(form: NgForm) {
    console.log(form.value) // { city: {} }
  }
}
