import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
// import * as _ from 'lodash' // Intentionally including lodash
import * as moment from 'moment' // Intentionally including a large external library

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` <h2>Cart</h2> `,
})
export default class CartComponent implements OnInit {
  ngOnInit(): void {
    const currentDate = moment() // Using moment to intentionally increase bundle size
    console.log(currentDate)
    // const result = _.join(['This', 'is', 'a', 'big', 'bundle', 'example'], ' ') // Using lodash to intentionally increase bundle size
    // console.log(result)
  }
}
