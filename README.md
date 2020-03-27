<p align="center">
  <a href="https://arctica.io">
    <img alt="Arctica logo" src="https://arctica.io/static/android-chrome-192x192.png" width="60" />
  </a>
</p>

<h1 align="center">@arctica/test-kit</h1>

A base config and starter tests for unit/end to end testing with Jest, Codecept and Playwright. This kit is primarily made for testing React applications such as Gatsby, Next.JS and Create React App but may pair with other JS apps too.

## Usage

Install the package from the NPM registry:

`npm i @arctica/test-kit`

### Unit tests - Jest

Create `jest.config.js` in the root of your application, extend the config as required:

```javascript
const config = require("@arctica/test-kit/jest.config");

module.exports = { ...config };
```

Add the following to your `package.json` scripts:

```JSON
  "scripts": {
    "test:js": "jest",
    "test:js:coverage": "jest --coverage",
    "test:js:update": "jest --u",
  }
```

Add unit tests to your `/src` folder.

Run unit tests: `npm run test:js`

Run unit tests with code coverage: `npm run test:js:coverage`

Update snapshot tests: `npm run test:js:update`

### End to end tests - Codecept

Create `codecept.conf.js` in the root of your application, extend the config as required:

```javascript
const config = require("@arctica/test-kit/codecept.conf");

module.exports = { ...config };
```

Add the following to your `package.json` scripts:

```JSON
  "scripts": {
    "test:e2e": "npx codeceptjs run --steps",
  }
```

Add feature tests to your `/tests` folder.

Run e2e tests: `npm run test:e2e`

## Resources

https://www.gatsbyjs.org/docs/unit-testing/

https://codecept.io/playwright/#writing-tests

## To do

- Typescript support
