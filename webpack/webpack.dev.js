/*
 * @Author: your name
 * @Date: 2019-11-12 14:51:05
 * @LastEditTime: 2019-11-19 21:31:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/webpack/webpack.dev.js
 */
const path = require("path");
const webpack = require("webpack");
module.exports = {
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
    // host:'',
    hot: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
              configFile: "../tsconfig.json",
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
