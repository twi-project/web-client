module.exports = {
  parser: "babel-eslint",
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        cwd: __dirname,
        root: [
          "src"
        ]
      }
    }
  },
  extends: [
    "airbnb",
    "@octetstream"
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["to", "hrefLeft", "hrefRight"],
      aspects: ["noHref", "invalidHref", "preferButton"]
    }],

    "no-unused-expressions": 0,
    "operator-linebreak": ["error", "after", {
      overrides: {
        "+": "ignore"
      }
    }],
    "func-names": ["error", "always", {
      generators: "never"
    }],

    "react/destructuring-assignment": 0,
    "react/button-has-type": 0
  }
}
