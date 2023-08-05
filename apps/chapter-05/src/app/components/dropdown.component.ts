import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, ButtonModule],
  template: `
    <h2>Dropdown</h2>

    <form #form="ngForm" (ngSubmit)="onSubmit(form)" novalidate>
      <div class="form-group">
        <span id="dd1">Default Dropdown</span>
        <p-dropdown
          [options]="cities"
          ngModel
          optionLabel="name"
          name="city"
          aria-labelledby="dd1"
        />
      </div>

      <div class="form-group">
        <span id="dd2">Dropdown With Filter</span>

        <p-dropdown
          [options]="cities"
          ngModel
          optionLabel="name"
          name="cityWithFilter"
          [filter]="true"
          aria-labelledby="dd2"
        />
      </div>

      <div class="form-group">
        <span id="dd3">Grouping</span>

        <p-dropdown
          [options]="groupedCities"
          ngModel
          name="cityWithGroup"
          placeholder="Select a City"
          aria-labelledby="dd3"
          [group]="true"
        >
          <ng-template let-group pTemplate="group">
            <div>
              <span class="pi pi-map-marker"></span>
              <span>{{ group.label }}</span>
            </div>
          </ng-template>
        </p-dropdown>
      </div>

      <div class="form-group">
        <span id="dd4">Templating</span>

        <p-dropdown
          [options]="cities"
          ngModel
          optionLabel="name"
          name="cityWithTemplate"
          [showClear]="true"
          placeholder="Select a City"
          aria-labelledby="dd4"
        >
          <ng-template pTemplate="selectedItem">
            <div *ngIf="form.value.cityWithTemplate">
              <span class="pi pi-map-marker"></span>
              <span>{{ form.value.cityWithTemplate.name }}</span>
            </div>
          </ng-template>
          <ng-template let-city pTemplate="item">
            <div>
              <span class="pi pi-map-marker"></span>
              <span>{{ city.name }}</span>
            </div>
          </ng-template>
        </p-dropdown>
      </div>

      <div class="form-group">
        <span id="dd5">Events</span>

        <p-dropdown
          [options]="cities"
          ngModel
          optionLabel="name"
          (onChange)="onCityChange($event.value)"
          name="cityWithEvents"
          aria-labelledby="dd5"
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
    `,
  ],
})
export default class DropdownComponent {
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

  onCityChange(value: { name: string; code: string }) {
    alert(`You have selected: ${value.name}`)
  }

  onSubmit(form: NgForm) {
    console.log(form.value) // { city: {} }
  }
}
