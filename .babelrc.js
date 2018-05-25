module.exports = {
  presets: [
    ["@babel/react", {
      pragma: "h"
    }],
    ["@babel/env", {
      modules: false,
      exclude: ["transform-regenerator"],
      targets: {
        browsers: ["last 2 years", "not dead"]
      }
    }]
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/syntax-dynamic-import",
    ["@babel/proposal-decorators", {
      legacy: true
    }],
    ["@babel/proposal-class-properties", {
      loose: true
    }],
    "@babel/proposal-optional-catch-binding",
    "@babel/proposal-do-expressions",
    "@babel/proposal-nullish-coalescing-operator",
    "@babel/proposal-pipeline-operator",
    "@babel/proposal-optional-chaining",
    ["@babel/proposal-object-rest-spread", {
      useBuiltIns: true,
    }],
    ["module-resolver", {
      root: ["src"],
    }]
  ],
  env: {
    production: {
      plugins: ["transform-react-remove-prop-types"]
    }
  }
}