import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { EnvModes } from './constants';
import type { BuildOptions } from './types';

const prodPlugins = (): webpack.WebpackPluginInstance[] => {
  const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../../.env.production'),
  });

  return [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...dotenv.parsed,
        REACT_APP_NODE_ENV: EnvModes.production,
      }),
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ];
};

const devPlugins = (mock: string): webpack.WebpackPluginInstance[] => {
  const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../../.env.development'),
  });

  return [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...dotenv.parsed,
        REACT_APP_NODE_ENV: EnvModes.development,
        REACT_APP_MOCKING: mock,
      }),
    }),
  ];
};

export const buildPlugins = ({
  paths,
  mock,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: paths.html,
    filename: 'index.html',
  }),
  new webpack.ProgressPlugin(),
  ...(isDev ? devPlugins(mock) : prodPlugins()),
];
