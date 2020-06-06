const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * @param fileName {string} export file's name
 * @param template {string} input file's path
 */
function newHtmlWebpackPlugin(fileName, template) {
  return new HtmlWebpackPlugin({
    filename: fileName,
    template: template,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true
    },
    inject: true
  })
}
module.exports = function htmlPlugin(config) {
  config.plugins.concat([
    newHtmlWebpackPlugin("index.html", global.PATH.src + "/index.html"),
    newHtmlWebpackPlugin("message_board.html", global.PATH.src + "/index.html")
  ])
}

