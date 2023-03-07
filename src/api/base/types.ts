export type BaseApiRequest = {
  // используем any, т.к. lazy импорт нормально не типизируется
  mock: () => Promise<any>;
  request: Promise<never>;
};
