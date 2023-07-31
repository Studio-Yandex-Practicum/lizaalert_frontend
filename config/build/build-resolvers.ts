import path from 'path';
import type { ResolveOptions } from 'webpack';
import type { BuildOptions } from './types';

export const buildResolvers = (options: BuildOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    api: path.resolve(__dirname, '../../src/api'),
    app: path.resolve(__dirname, '../../src/app'),
    assets: path.resolve(__dirname, '../../src/assets'),
    components: path.resolve(__dirname, '../../src/components'),
    config: path.resolve(__dirname, '../../src/config'),
    hooks: path.resolve(__dirname, '../../src/hooks'),
    pages: path.resolve(__dirname, '../../src/pages'),
    router: path.resolve(__dirname, '../../src/router'),
    store: path.resolve(__dirname, '../../src/store'),
    styles: path.resolve(__dirname, '../../src/styles'),
    types: path.resolve(__dirname, '../../src/types'),
    utils: path.resolve(__dirname, '../../src/utils'),
  },
});
