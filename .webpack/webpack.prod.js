const { merge } = require('webpack-merge');
const webpack = require('webpack');
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
  ],
});
