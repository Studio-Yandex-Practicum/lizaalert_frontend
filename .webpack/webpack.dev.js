const { merge } = require('webpack-merge');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const common = require('./webpack.common');
const { mapEnv } = require('./utils');

const { parsed } = dotenv.config({
  path: path.resolve(__dirname, '..', './.env.development'),
});

module.exports = (env) => {
  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, '..', 'build'),
      },
      watchFiles: path.resolve(__dirname, '..', 'src'),
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          exclude: /\.module\.(scss|css)$/i,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.module\.scss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]_[hash:base64:5]'
                },
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          ...mapEnv(parsed),
          REACT_APP_MOCKING: env.REACT_APP_MOCKING,
        },
      }),
    ],
  });
};
