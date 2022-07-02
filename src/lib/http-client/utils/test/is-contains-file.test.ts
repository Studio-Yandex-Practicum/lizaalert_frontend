import { isContainsFile } from '../is-contains-file';
import { MOCK_DATA, MOCK_FILE } from './constants';

describe('Функция isContainsFile корректно определяет наличие объекта типа File в переданном объекте', () => {
  it('Возвращает false, если в объекте нет файла', () => {
    expect(isContainsFile(MOCK_DATA)).toBe(false);
  });

  it('Возвращает true, если в объекте есть файл', () => {
    expect(isContainsFile({ ...MOCK_DATA, file: MOCK_FILE })).toBe(true);
  });

  it('Возвращает false, если передан пустой объект', () => {
    expect(isContainsFile({})).toBe(false);
  });
});
