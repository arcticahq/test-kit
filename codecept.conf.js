const { setHeadlessWhen } = require('@codeceptjs/configure')

setHeadlessWhen(process.env.CI)

exports.config = {
  tests: './tests/*_test.js',
  output: './tests/output',
  helpers: {
    Playwright: {
      url: 'http://localhost:9000',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './tests/steps/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'arctica',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
