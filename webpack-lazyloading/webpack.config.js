'use strict';
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'bootstrap': './app/Main/main.ts',
  },
  output: {
    path:'./dist',
    publicPath: './dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts/,loaders:['ts-loader','angular2-router-loader'],exclude:/node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: false,

  plugins: [
      new CleanWebpackPlugin(['dist'])
    ]
};