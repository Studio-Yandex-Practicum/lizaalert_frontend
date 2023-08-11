import webpack from 'webpack';
import { buildResolvers } from './build-resolvers';
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildDevServer } from './build-devserver';
import { buildOptimizations } from './build-optimizations';
import type { BuildOptions } from './types';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js',
      path: paths.build,
      publicPath: '/',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: isDev ? undefined : buildOptimizations(),
  };
}
