const { merge } = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
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
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin(),
    ]
  }
});
