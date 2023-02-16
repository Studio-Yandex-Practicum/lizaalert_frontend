const { merge } = require('webpack-merge');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const common = require('./webpack.common');
const { mapEnv } = require('./utils')

const { parsed } = dotenv.config({ path: path.resolve(__dirname, '..', './.env.development') });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '..', 'build'),
    },
    watchFiles: path.resolve(__dirname, '..', 'src'),
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': mapEnv(parsed),
    }),
  ],
});
