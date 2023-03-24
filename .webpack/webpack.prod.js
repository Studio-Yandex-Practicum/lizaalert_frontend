const {merge} = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const dotenv = require('dotenv');
const path = require('path');

const common = require('./webpack.common.js');
const {mapEnv} = require('./utils');

const {parsed} = dotenv.config({
  path: path.resolve(__dirname, '..', './.env.production'),
});

module.exports = (env) =>
  merge(common, {
    mode: 'production',
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          ...mapEnv(parsed),
          ...mapEnv(env),
        },
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new HtmlMinimizerPlugin(),
        new TerserPlugin(),
      ],
    },
  });
