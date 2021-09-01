// vue.config.js
const path = require("path");
const port = process.env.port || process.env.npm_config_port || 8080
function resolve(dir) {
  return path.join(__dirname, dir);
}

// other code ...
module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    after: require('./src/mock/mock-server.js'),
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
  },
 
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
  },


  // other code ...
};
// other code ...
