import { MOCK_URL } from './utils/test/constants';
import HTTPClient from './http-client';

describe('Класс HTTPClient', () => {
  const httpClient = new HTTPClient(MOCK_URL);

  it('Корректно создается инстанс класса', () => {
    expect(httpClient).toBeInstanceOf(HTTPClient);
  });

  it('У инстанса класса есть метод get', () => {
    expect(httpClient.get).toBeDefined();
    expect(typeof httpClient.get === 'function').toBe(true);
  });

  it('У инстанса класса есть метод post', () => {
    expect(httpClient.post).toBeDefined();
    expect(typeof httpClient.post === 'function').toBe(true);
  });

  it('У инстанса класса есть метод put', () => {
    expect(httpClient.put).toBeDefined();
    expect(typeof httpClient.put === 'function').toBe(true);
  });

  it('У инстанса класса есть метод patch', () => {
    expect(httpClient.patch).toBeDefined();
    expect(typeof httpClient.patch === 'function').toBe(true);
  });

  it('У инстанса класса есть метод delete', () => {
    expect(httpClient.delete).toBeDefined();
    expect(typeof httpClient.delete === 'function').toBe(true);
  });
});
