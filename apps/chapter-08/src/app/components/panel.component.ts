import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { ButtonModule } from 'primeng/button'
import { FieldsetModule } from 'primeng/fieldset'
import { PanelModule } from 'primeng/panel'
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { SplitterModule } from 'primeng/splitter'
import { TabViewModule } from 'primeng/tabview'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    ScrollPanelModule,
    AccordionModule,
    SplitterModule,
    FieldsetModule,
    TabViewModule,
  ],
  template: `
    <h2>Panel</h2>

    <h3>Basic Panel</h3>

    <p-panel header="Product Details" [toggleable]="true">
      <p>
        Experience the power of Laptop XYZ, featuring the latest processor and a
        sleek design.
      </p>
    </p-panel>

    <h3>ScrollPanel</h3>

    <p-panel header="Product Details" [toggleable]="true">
      <p-scrollPanel [style]="{ width: '100%', height: '200px' }">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          laoreet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean sed tristique tortor. Praesent malesuada pretium diam, vel
          ornare arcu pellentesque non. Donec euismod velit quis nunc finibus,
          eget finibus purus pellentesque. Pellentesque sed congue lorem, eu
          suscipit justo. Nam fermentum aliquam pretium. In eget maximus eros.
        </p>
        <p>
          Quisque venenatis enim vitae quam pulvinar blandit. Ut semper nibh
          sem, a vulputate odio interdum eu. Morbi at pretium quam. Suspendisse
          in sapien quis magna pharetra aliquam. In malesuada, erat vel
          consequat dapibus, orci arcu ornare elit, in tristique sapien mi vel
          urna. Quisque leo nulla, rhoncus in magna at, porta bibendum enim. Ut
          scelerisque condimentum ipsum a iaculis. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Phasellus eget lobortis nisi. Donec
          nec accumsan tortor. Integer sit amet consequat justo, eu rhoncus
          diam. Proin dignissim non urna in dapibus. Proin ac tristique felis.
          Vivamus congue maximus eros. Aliquam egestas dictum leo, eu congue
          ipsum efficitur id.
        </p>
        <p>
          Suspendisse posuere luctus nibh ac rutrum. Suspendisse feugiat purus
          eget quam cursus, a lobortis lorem tristique. In sollicitudin viverra
          urna, vel mattis nunc mollis vel. Nulla quis varius enim. Suspendisse
          auctor tempor quam, sed aliquam nunc tincidunt ut. Integer euismod
          felis ut blandit luctus. Proin vel sagittis lorem. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Proin tristique lectus et felis varius mollis. Praesent dapibus, augue
          vel auctor posuere, nisi lorem bibendum tellus, id tempor nisi lacus
          non mauris. Phasellus auctor diam non dolor hendrerit congue. Nunc a
          mi nulla. Duis vulputate turpis erat, id aliquam justo lacinia non.
          Curabitur tellus elit, dictum nec quam sit amet, gravida mollis massa.
          Cras dapibus lacinia risus. In ut diam at libero mollis porta in ut
          leo. Nam efficitur sollicitudin arcu eu lacinia. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Praesent mi neque, consectetur et vestibulum et, vulputate id quam.
          Suspendisse dignissim justo lorem, eget posuere purus condimentum ut.
        </p>
        <p>
          Etiam tellus lorem, laoreet id suscipit sit amet, consequat non
          sapien. Pellentesque sed mi sit amet urna dictum blandit sed dapibus
          dui. In interdum quis elit ac mattis. Vivamus et ligula lectus. Sed
          interdum, mauris ut laoreet vulputate, quam felis luctus lorem, in
          tincidunt augue ex non enim. Phasellus lacus risus, fermentum id
          ligula vel, vehicula condimentum purus. Morbi ac bibendum libero,
          vitae maximus orci. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </p-scrollPanel>
    </p-panel>

    <h3>Accordion</h3>

    <p-accordion>
      <p-accordionTab header="Specifications">
        <ul>
          <li>Processor: XYZ</li>
          <li>Memory: 8GB RAM</li>
          <!-- ... other specs ... -->
        </ul>
      </p-accordionTab>
      <p-accordionTab header="User Reviews">
        <p>"This product is fantastic! Highly recommend." - Alex G</p>
        <!-- ... other reviews ... -->
      </p-accordionTab>
      <p-accordionTab header="Warranty">
        <p>This product comes with a 2-year warranty covering...</p>
      </p-accordionTab>
      <!-- ... other tabs ... -->
    </p-accordion>

    <h3>Fieldset</h3>

    <p-fieldset legend="Specifications" [toggleable]="true" class="block mb-4">
      <ul>
        <li>Screen Size: 15.6 inches</li>
        <li>Processor: Intel i7</li>
        <li>RAM: 16GB</li>
        <!-- ... other specifications ... -->
      </ul>
    </p-fieldset>

    <p-fieldset legend="User Reviews" [toggleable]="true" class="block mb-4">
      <p>"Fantastic product with great performance!" - Yen N</p>
      <!-- ... other reviews ... -->
    </p-fieldset>

    <p-fieldset
      legend="Warranty Details"
      [toggleable]="true"
      class="block mb-4"
    >
      <p>
        This product comes with a 2-year warranty covering manufacturing
        defects.
        <!-- ... more warranty details ... -->
      </p>
    </p-fieldset>

    <h3>TabView</h3>

    <p-tabView>
      <p-tabPanel header="Warranty">
        <p>
          This product comes with a 2-year warranty covering manufacturing
          defects.
          <!-- ... more warranty details ... -->
        </p>
      </p-tabPanel>
      <p-tabPanel header="Specifications">
        <ul>
          <li>Screen Size: 15.6 inches</li>
          <li>Processor: Intel i7</li>
          <li>RAM: 16GB</li>
          <!-- ... other specifications ... -->
        </ul>
      </p-tabPanel>
      <p-tabPanel header="Reviews">
        <p>"Spectacular product! Highly recommended" - Aaron D</p>
        <!-- ... other reviews ... -->
      </p-tabPanel>
    </p-tabView>

    <h3>Splitter</h3>

    <p-splitter [style]="{ height: '300px' }" layout="horizontal">
      <ng-template pTemplate>
        <div class="col flex align-items-center justify-content-center">
          <img src="assets/placeholder.png" alt="Image 1" />
        </div>
      </ng-template>
      <ng-template pTemplate>
        <div class="col flex align-items-center justify-content-center">
          <img src="assets/placeholder.png" alt="Image 2" />
        </div>
      </ng-template>
    </p-splitter>
  `,
})
export default class PanelComponent {}
