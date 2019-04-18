module.exports = {
  presets: [
    ["@babel/react", {
      pragma: "createElement",
      pragmaFrag: "Fragment"
    }],
    ["@babel/env", {
      modules: false,
      exclude: ["transform-regenerator"],
    }]
  ],
  plugins: [
    "react-hot-loader/babel",
    "@babel/transform-runtime",
    "@babel/syntax-dynamic-import",
    ["@babel/proposal-decorators", {
      legacy: true
    }],
    ["@babel/proposal-class-properties", {
      loose: true
    }],
    ["@babel/proposal-pipeline-operator", {
      proposal: "minimal"
    }],
    "@babel/proposal-optional-catch-binding",
    "@babel/proposal-do-expressions",
    "@babel/proposal-nullish-coalescing-operator",
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
