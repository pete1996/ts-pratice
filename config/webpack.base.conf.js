"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口起点
  entry: {
    app: "./src/index.tsx",
  },
  // 输出
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  // 解析
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".less", ".json", ".jsx"],
  },
  // loader
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory=true",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: "body",
    }),
  ],
};
