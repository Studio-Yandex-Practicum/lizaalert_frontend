const { merge } = require('webpack-merge');
const webpack = require('webpack');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const dotenv = require('dotenv');
const path = require('path');

const common = require('./webpack.common.js');
const { mapEnv } = require('./utils')

const { parsed } = dotenv.config({ path: path.resolve(__dirname, '..', './.env.production') });

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': mapEnv(parsed),
    }),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ]
          }
        }
      })
    ]
  }
});
