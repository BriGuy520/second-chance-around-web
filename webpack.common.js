const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: '/node_modules/',
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }, 
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",
      template: "./src/public/index.html" // source html
    }),
    new ExtractTextPlugin({ filename: 'css/style.css'})
  ]
}