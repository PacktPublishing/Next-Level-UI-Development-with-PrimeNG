import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <h2>PrimeFlex</h2>

    <h3>Flexbox Basic</h3>

    <div class="flex">
      <div class="text-center p-3 bg-primary">Flex Item 1</div>
      <div class="text-center p-3 bg-primary">Flex Item 2</div>
      <div class="text-center p-3 bg-primary">Flex Item 3</div>
    </div>

    <h3>Flexbox Direction</h3>

    <div class="flex flex-column">
      <div class="text-center p-3 bg-primary">Flex Item 1</div>
      <div class="text-center p-3 bg-primary">Flex Item 2</div>
      <div class="text-center p-3 bg-primary">Flex Item 3</div>
    </div>

    <h3>Flexbox Wrap</h3>

    <div class="flex flex-wrap">
      <div class="text-center p-3 bg-primary">Flex Item 1</div>
      <div class="text-center p-3 bg-primary">Flex Item 2</div>
      <div class="text-center p-3 bg-primary">Flex Item 3</div>
    </div>

    <h3>Flexbox Alignment</h3>

    <div class="flex flex-wrap justify-content-evenly">
      <div class="text-center p-3 bg-primary">Flex Item 1</div>
      <div class="text-center p-3 bg-primary">Flex Item 2</div>
      <div class="text-center p-3 bg-primary">Flex Item 3</div>
    </div>

    <h3>Grid Basic</h3>

    <div class="grid">
      <div class="col-6">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
      <div class="col-6">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
      <div class="col-6">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
      <div class="col-6">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
    </div>

    <h3>Grid Responsive</h3>

    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
          <div class="text-center p-3 bg-primary">6</div>
      </div>
    </div>

  `
})
export default class PrimeFlexComponent { }
