import { Pipe, PipeTransform } from '@angular/core'

// mimic heavy calculation
const calculateTotal = (num: number): number => {
  let num1 = 0
  let num2 = 1
  let sum
  let i = 0
  for (i = 0; i < num; i++) {
    sum = num1 + num2
    num1 = num2
    num2 = sum
  }
  return num2
}

@Pipe({
  name: 'total',
  standalone: true,
  pure: true,
})
export class TotalPipe implements PipeTransform {
  transform(quantity: number): number {
    // Perform the calculation and return the result
    console.log(`Transform total price from PIPE`)
    return calculateTotal(quantity)
  }
}
