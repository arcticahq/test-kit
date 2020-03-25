const { setHeadlessWhen } = require('@codeceptjs/configure')

setHeadlessWhen(process.env.CI)

exports.config = {
  tests: './specs/*_test.js',
  output: './codecept',
  helpers: {
    Playwright: {
      url: 'http://localhost:9000',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './codecept/steps_file.js'
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
