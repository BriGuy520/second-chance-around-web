const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
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
      test: /\.css$/,
      use: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: ['css-loader']
        }
      )
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