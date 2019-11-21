/*
 * @Author: your name
 * @Date: 2019-11-12 14:51:23
 * @LastEditTime: 2019-11-21 14:20:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/webpack/webpack.prod.js
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const chalk = require("chalk");
const TerserPlugin = require("terser-webpack-plugin");
// console.info(chalk.yellowBright(process.env.NODE_ENV));
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: 4,
              workerParallelJobs: 50,
              poolRespawn: false,
              poolTimeout: 2000,
              poolParallelJobs: 50,
              name: "tsPool",
            },
          },
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "thread-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./postcss.config.js",
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "thread-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              paths: [path.resolve(__dirname, "src")],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin({
        exclude: /node_modules/,
        parallel: 4,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css",
    }),
  ],
};
