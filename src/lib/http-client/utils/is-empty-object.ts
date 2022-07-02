export const isEmptyObject = (data: Record<string, unknown>): boolean =>
  !(Object.keys(data).length > 0);
