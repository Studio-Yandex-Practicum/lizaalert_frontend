import path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { BuildOptions } from './types';

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => ({
  static: {
    directory: path.resolve(__dirname, '../../build'),
  },
  watchFiles: path.resolve(__dirname, '../../src'),
  port: options.port,
  open: true,
  hot: true,
  historyApiFallback: true,
});
