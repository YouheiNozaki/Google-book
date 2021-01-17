const path = require("path")
const webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = ( env: string ) => ({
  mode: env ? "production" : "development",
  entry: path.resolve(__dirname, "src/main.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8080
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      'vue': '@vue/runtime-dom'
    },
    extensions: ['.vue', '.ts', '.tsx', '.d.ts']
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: [/\.vue$/],
        loader: 'vue-loader',
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: ['\\.vue$'],
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      publicPath: "dist",
      filename: "index.html",
      template: "src/index.html"
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    })
  ]
})
