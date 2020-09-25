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
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: "./expensify-app/src/app.js",
    output: {
      path: path.join(__dirname, "expensify-app", "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "expensify-app", "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
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
