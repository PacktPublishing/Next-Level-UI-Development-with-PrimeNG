import { fakeAsync, flush, tick } from '@angular/core/testing'

describe('FakeAsync Example', () => {
  it('should test asynchronous code using fakeAsync', fakeAsync(() => {
    let value: string | undefined

    // Simulate an asynchronous operation
    setTimeout(() => {
      value = 'completed'
    }, 1000)

    // Use tick to simulate the passage of time
    tick(500) // Simulate 500 milliseconds passed
    expect(value).toBeUndefined() // Value should still be undefined

    tick(500) // Simulate another 500 milliseconds passed
    expect(value).toBe('completed')

    flush()
  }))
})
