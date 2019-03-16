const path = require("path");
const ClosurePlugin = require("closure-webpack-plugin");

module.exports = {
  entry: {
    lib: "./src/lib.ts",
    entrypoint: "./src/entrypoint.ts"
  },
  optimization: {
    minimizer: [
      new ClosurePlugin(
        { mode: "STANDARD" },
        {
          compilation_level: "ADVANCED",
          externs: "externs.js"
        }
      )
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};
