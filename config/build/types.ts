import { EnvModes } from './constants';

export type BuildMode = keyof typeof EnvModes;

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
};

export type BuildEnv = {
  mode: BuildMode;
  mock: string;
  port: number;
};

export type BuildOptions = {
  mode: BuildMode;
  mock: string;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
};
