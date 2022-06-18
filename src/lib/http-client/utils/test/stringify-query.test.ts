import { EXPECTED_PARAMS_URL, MOCK_PARAMS, MOCK_URL } from './constants';
import { stringifyQuery } from '../stringify-query';

describe('Функция stringifyQuery корректно приводит параметры в url', () => {
  it('Возвращает корректную строку при передаче объекта параметров', () => {
    expect(stringifyQuery(MOCK_URL, MOCK_PARAMS)).toBe(EXPECTED_PARAMS_URL);
  });

  it('Возвращает базовый url, если в качестве параметров передан пустой объект', () => {
    expect(stringifyQuery(MOCK_URL, {})).toBe(MOCK_URL);
  });
});
