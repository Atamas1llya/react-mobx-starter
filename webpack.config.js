const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'babel-polyfill', './src'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /\/node_modules\//,
        loaders: ['babel-loader']
      }, {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /.less$/,
        loaders: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}));
}

module.exports = config;
