import { isEmptyObject } from '../is-empty-object';
import { MOCK_FILE } from './constants';

describe('Функция isEmptyObject корректно определяет наличие ключей в объекте', () => {
  it('Возвращает false, если в объекте есть хотя бы один ключ', () => {
    isEmptyObject({ file: MOCK_FILE });
  });

  it('Возвращает true, если в объекте нет ключей', () => {
    isEmptyObject({});
  });
});
