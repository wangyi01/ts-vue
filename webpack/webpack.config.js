/*
 * @Author: your name
 * @Date: 2019-11-12 14:45:57
 * @LastEditTime: 2019-11-21 14:23:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project/webpack/webpack.config.js
 */
const baseConfig = require("./webpack.base");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");
const merge = require("webpack-merge");
const chalk = require("chalk");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
console.info(chalk.red(process.env.NODE_ENV));
module.exports = () => {
  if (process.env.NODE_ENV === "dev") {
    return merge(baseConfig, devConfig);
  } else {
    return smp.wrap(merge(baseConfig, prodConfig));
  }
};
