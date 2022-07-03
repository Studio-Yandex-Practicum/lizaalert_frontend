import { stringifyData } from '../stringify-data';
import { MOCK_DATA } from './constants';

describe('Функция stringifyData корректно приводит объект к строке', () => {
  it('Возвращает корректную строку', () => {
    expect(stringifyData(MOCK_DATA)).toBe(JSON.stringify(MOCK_DATA));
  });

  it('Возвращает пустую строку, если передан пустой объект', () => {
    expect(stringifyData({})).toBe('');
  });
});
