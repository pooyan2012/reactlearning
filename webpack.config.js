const path = require("path");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//console.log(path.join(__dirname,"indecision-app", "public"));
module.exports = {
  entry: "./indecision-app/src/app.js",
  output: {
    path: path.join(__dirname, "indecision-app", "public"),
    filename: "bundle.js",
  },
};
