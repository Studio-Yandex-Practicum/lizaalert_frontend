import path from 'path';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { EnvModes } from './config/build/constants';
import type { BuildEnv, BuildPaths } from './config/build/types';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = EnvModes[env.mode] || EnvModes.development;
  const PORT = env.port || 3000;

  const isDev = mode === EnvModes.development;

  return buildWebpackConfig({
    mode,
    mock: env.mock,
    paths,
    isDev,
    port: PORT,
  });
};
