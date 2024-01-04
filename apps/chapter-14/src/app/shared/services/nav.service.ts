import { DOCUMENT } from '@angular/common'
import { Injectable, inject } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private document = inject(DOCUMENT)

  navigateTo(section: string) {
    try {
      this.document
        .querySelector('#' + section)
        ?.scrollIntoView({ behavior: 'smooth' })
    } catch (e) {
      console.error(e)
    }
  }
}
