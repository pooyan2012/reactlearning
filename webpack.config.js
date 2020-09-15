/* ////////////////////uncomment for indecision-app/////////////////////
const path = require("path");

module.exports = {
  entry: "./indecision-app/src/app.js",
  output: {
    path: path.join(__dirname, "indecision-app", "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: { contentBase: path.join(__dirname, "indecision-app", "public") },
};
*/

////////////////////uncomment for expensify-app/////////////////////
const path = require("path");

module.exports = {
  entry: "./expensify-app/src/playground/hoc.js",
  output: {
    path: path.join(__dirname, "expensify-app", "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "expensify-app", "public"),
    historyApiFallback: true,
  },
};

////////////////////uncomment for portfolio-app/////////////////////
/*const path = require("path");

module.exports = {
  entry: "./portfolio-app/src/app.js",
  output: {
    path: path.join(__dirname, "portfolio-app", "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "portfolio-app", "public"),
    historyApiFallback: true,
  },
};
*/
