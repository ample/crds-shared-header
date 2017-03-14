var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  entry: {
    'bundle': ['./src/main.ts']
  },
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
