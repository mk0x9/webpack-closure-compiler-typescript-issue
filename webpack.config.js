const path = require("path");
const ClosurePlugin = require("closure-webpack-plugin");

module.exports = {
  entry: {
    lib: "./src/Library.ts",
    entrypoint: "./src/entrypoint.ts"
  },
  optimization: {
    minimizer: [
      new ClosurePlugin(
        { mode: "STANDARD" },
        {
          compilation_level: "ADVANCED",
          externs: "externs.js",
          language_in: "ECMASCRIPT5_STRICT",
          language_out: "ECMASCRIPT5",
          generate_exports: true,
          export_local_property_definitions: true
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
