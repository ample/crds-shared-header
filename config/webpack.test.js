const helpers = require('./helpers');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = function(options) {
  return {
    devtool: 'inline-source-map',

    resolve: {
      extensions: ['', '.ts', '.js'],
      root: helpers.root('src'),
    },

    module: {

      preLoaders: [
        {
          test: /\.ts$/,
          loader: 'tslint-loader',
          exclude: [helpers.root('node_modules')]
        }
      ],

      loaders: [
        {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader']
        }
      ],

      postLoaders: []
    },

    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(ENV)
      }),
    ],

    tslint: {
      emitErrors: false,
      failOnHint: false,
      resourcePath: 'src'
    },

    node: {
      global: 'window',
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  };
}