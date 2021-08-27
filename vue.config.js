// vue.config.js
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// other code ...
module.exports = {
  // other code ...
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  }
  // other code ...
};
// other code ...
