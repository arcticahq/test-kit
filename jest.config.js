/*------------------------------------------------------------------
[Jest Config]

Project:    Arctica Homepage
Version:    1.0
-------------------------------------------------------------------*/

module.exports = {
  transform: {
    "^.+\\.jsx?$":
      "<rootDir>/node_modules/@arctica/test-kit/jest-preprocess.js"
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/node_modules/@arctica/test-kit/__mocks__/file-mock.js`
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(gatsby)/*|@arctica/*)"
  ],
  testRegex: "src/(.*(test|spec))\\.js?$",
  collectCoverageFrom: ["src/components/**/*.js"],
  coverageDirectory: "reports/coverage",
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/node_modules/@arctica/test-kit/loadershim.js`
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"]
}
