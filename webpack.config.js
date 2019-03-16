const path = require("path");

module.exports = {
  entry: {
    lib: "./src/lib.ts",
    entrypoint: "./src/entrypoint.ts"
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
