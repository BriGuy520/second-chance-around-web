const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports =  merge(common, {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[contentHash].bundle.js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new HtmlWebPackPlugin({
        template: './src/public/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhiteSpace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
});