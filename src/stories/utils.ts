export const utils = {
  disableControls<T extends string>(...properties: T[]) {
    return properties.reduce<Record<T, { control: boolean }>>((acc, key) => {
      // eslint-disable-next-line no-param-reassign
      acc[key] = {
        control: false,
      };
      return acc;
    }, {} as Record<T, { control: boolean }>);
  },
};
