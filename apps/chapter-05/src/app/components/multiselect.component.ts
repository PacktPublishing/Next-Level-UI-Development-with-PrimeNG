import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { MultiSelectModule } from 'primeng/multiselect'

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, MultiSelectModule, ButtonModule],
  template: `
    <h2>MultiSelect</h2>

    <form #form="ngForm" (ngSubmit)="onSubmit(form)" novalidate>
      <div class="form-group">
        <span id="dd1">Default MultiSelect</span>
        <p-multiSelect
          [options]="cities"
          ngModel
          optionLabel="name"
          name="city"
          aria-labelledby="dd1"
        />
      </div>

      <div class="form-group">
        <span id="dd2">MultiSelect Grouping</span>
        <p-multiSelect
          [options]="groupedCities"
          [group]="true"
          ngModel
          name="cityWithGroup"
          defaultLabel="Select a City"
          aria-labelledby="dd2"
        >
          <ng-template let-group pTemplate="group">
            <div>
              <span class="pi pi-map-marker"></span>
              <span>{{ group.label }}</span>
            </div>
          </ng-template>
        </p-multiSelect>
      </div>

      <div class="form-group">
        <span id="dd3">MultiSelect Templating</span>
        <p-multiSelect
          [options]="cities"
          ngModel
          defaultLabel="Select a Country"
          name="cityWithTemplating"
          optionLabel="name"
          aria-labelledby="dd3"
        >
          <ng-template let-cities pTemplate="selectedItems">
            <div *ngFor="let city of cities">
              <span class="pi pi-map-marker"></span>
              <span>{{ city.name }}</span>
            </div>

            <div *ngIf="cities?.length === 0">Select Cities</div>
          </ng-template>
          <ng-template let-city pTemplate="item">
            <div>
              <span class="pi pi-map-marker"></span>
              <span>{{ city.name }}</span>
            </div>
          </ng-template>
        </p-multiSelect>
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
export default class MultiSelectComponent {
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
