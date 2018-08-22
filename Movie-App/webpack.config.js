const path = require('path');
var HTMLWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
     { test: /\.(js)$/, use: 'babel-loader'},
     { test: /\.(css)$/, use: [ 'style-loader', 'css-loader']},
     { test: /\.(png|svg|jpg)$/, use: 'file-loader'}
    ]
  },
  plugins: [new HTMLWebPackPlugin({
    template: 'app/index.html'
  })],
   mode: "development"

};


if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV' : JSON.stringigy(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;