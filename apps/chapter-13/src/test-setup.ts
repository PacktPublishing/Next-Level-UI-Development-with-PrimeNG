// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
}
import 'jest-preset-angular/setup-jest'

// Existing issue with jsdom
// https://github.com/primefaces/primeng/issues/14085

const originalConsoleError = console.error
const jsDomCssError = 'Error: Could not parse CSS stylesheet'
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params)
  }
}
