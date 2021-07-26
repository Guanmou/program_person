/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
  override,
  addDecoratorsLegacy,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");
// 常用Api
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#9254de',
    }
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "@public": path.resolve(__dirname, "./public"),
  })
);