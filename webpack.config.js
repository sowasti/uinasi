const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  experiments: {
    asset: true
  },
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  externals: {
    react: "react"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif)$/i,
        type: "asset"       
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: [/node_modules/]        
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ESLintPlugin()
  ]
}