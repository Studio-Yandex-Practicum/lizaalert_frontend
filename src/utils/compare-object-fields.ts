export const compareObjectFields = (
  first: Record<string, unknown>,
  second: Record<string, unknown>,
  fields: string[]
): boolean => fields.every((key) => first[key] === second[key]);
