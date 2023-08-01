import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptions } from './types';

const babelLoader: webpack.RuleSetRule = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: 'babel-loader',
};

const imageLoader: webpack.RuleSetRule = {
  test: /\.(png|jpe?g|gif)$/i,
  type: 'asset/resource',
};

const svgLoader: webpack.RuleSetRule = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
};

const fontLoader: webpack.RuleSetRule = {
  test: /\.(woff2?|eot|ttf|otf)$/i,
  type: 'asset/resource',
};

const cssLoader = (isDev: boolean): webpack.RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: isDev ? '[local]_[hash:base64:5]' : '[hash:base64:8]',
        },
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
});

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => [
  babelLoader,
  imageLoader,
  svgLoader,
  fontLoader,
  cssLoader(isDev),
];
