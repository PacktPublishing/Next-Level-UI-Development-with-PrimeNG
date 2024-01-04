import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  standalone: true,
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('')
  }
}
