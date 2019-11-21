/*
 * @Author: your name
 * @Date: 2019-11-12 14:49:50
 * @LastEditTime: 2019-11-21 14:14:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/webpack/webpack.base.js
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const env = {
  dev: () => {
    return require("./config/dev.env");
  },
  test: () => {
    return require("./config/test.env");
  },
  prod: () => {
    return require("./config/prod.env");
  },
};
module.exports = {
  //启动文件
  entry: { main: "./src/main.ts" },
  //打包输出文件
  output: {
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[hash].js",
  },
  resolve: {
    extensions: [".js", ".json", ".less", ".ts", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        // options: {
        //   loaders: {
        //     ts: "ts-loader",
        //   },
        // },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          //输出文件名,带8位的hash
          name: "img/[name].[ext].[hash:8]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          //输出文件名,带8位的hash
          name: "audio/[name].[ext].[hash:8]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[ext].[hash:8]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": env[process.env.NODE_ENV](),
    }),
  ],
};
