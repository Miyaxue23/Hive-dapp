const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: ["@smithy", "@bnb-chain"],
  publicPath: "./",
  productionSourceMap: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
});
