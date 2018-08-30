const {join} = require("path")

module.exports = ({env, file}) => ({
  map: env !== "production",
  parser: file.extname === ".scss" ? "postcss-scss" : false,
  plugins: {
    "postcss-use": {
      resolveFromFile: true,
      modules: "*"
    },
    "postcss-import": {
      root: join(__dirname, "src")
    },
    lost: {},
    "postcss-normalize": {},
    "postcss-preset-env": {},
    cssnano: env === "production" ? {} : false
  }
})