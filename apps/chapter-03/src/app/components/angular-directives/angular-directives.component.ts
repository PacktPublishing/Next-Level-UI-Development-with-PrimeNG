import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FallbackImageDirective } from '../../shared/directives'

@Component({
  selector: 'primengbook-angular-directives',
  standalone: true,
  imports: [CommonModule, FallbackImageDirective],
  template: `
    <h2>Angular Directives</h2>
    <div *ngIf="showMessage">
      <p>This message is shown conditionally.</p>
    </div>

    <p>This image below is from fallback directive.</p>
    <img src="nonexist.png" fallbackImage="assets/angular.png" />
  `,
})
export class AngularDirectivesComponent {
  showMessage = true
}
