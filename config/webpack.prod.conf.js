"use strict";
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
  // 模式
  mode: "production",
  // 输出
  output: {
    // path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[chunkhash].js",
  },
  // 插件
  plugins: [new CleanWebpackPlugin(), new webpack.HashedModuleIdsPlugin()],
  // 代码分离相关
  optimization: {},
});
