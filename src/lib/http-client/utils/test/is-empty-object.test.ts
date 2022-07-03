import { isEmptyObject } from '../is-empty-object';
import { MOCK_FILE } from './constants';

describe('Функция isEmptyObject корректно определяет наличие ключей в объекте', () => {
  it('Возвращает false, если в объекте есть хотя бы один ключ', () => {
    expect(isEmptyObject({ file: MOCK_FILE })).toBe(false);
  });

  it('Возвращает true, если в объекте нет ключей', () => {
    expect(isEmptyObject({})).toBe(true);
  });
});
