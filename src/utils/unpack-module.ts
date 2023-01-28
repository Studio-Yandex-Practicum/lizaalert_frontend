export const unpackModule = async <T>(module: {
  readonly default: Promise<T>;
}): Promise<T> => module.default;
