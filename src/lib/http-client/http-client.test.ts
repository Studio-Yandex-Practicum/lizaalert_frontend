import HTTPClient from './http-client';
import { MOCK_SERVER_URL, MOCK_URL } from './utils/test/constants';

describe('Класс HTTPClient', () => {
  describe('Корректно создается инстанс и присутствуют все публичные методы', () => {
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

  describe('Корректно отправляются запросы на примере мокового сервера', () => {
    const httpClient = new HTTPClient(MOCK_SERVER_URL);

    it('Возвращает промис XHR', async () => {
      const response = await httpClient.get('/posts');
      expect(response instanceof XMLHttpRequest).toBe(true);
    });

    it('Должен корректно проставлять query params', async () => {
      const { response, status } = await httpClient.get<{ userId: number }[]>(
        '/posts',
        {
          params: { userId: 1 },
        }
      );

      const isSameUserId = response.every(
        (post: { userId: number }) => post.userId === 1
      );

      expect(status).toBe(200);
      expect(isSameUserId).toBe(true);
    });

    it('Должен корректно отправлять GET-запрос', async () => {
      const { status } = await httpClient.get('/posts');
      expect(status).toBe(200);
    });

    it('Должен корректно отправлять POST-запрос', async () => {
      const { status } = await httpClient.post('/posts', {
        data: { title: 'foo', body: 'bar', userId: 1 },
      });
      expect(status).toBe(201);
    });

    it('Должен корректно отправлять PUT-запрос', async () => {
      const { response, status } = await httpClient.put<{ id: number }>(
        '/posts/1',
        {
          data: { id: 1, title: 'foo', body: 'bar', userId: 1 },
        }
      );
      expect(status).toBe(200);
      expect(response.id).toBe(1);
    });

    it('Должен корректно отправлять PATCH-запрос', async () => {
      const { response, status } = await httpClient.patch<{ title: string }>(
        '/posts/1',
        {
          data: { title: 'foobar' },
        }
      );
      expect(status).toBe(200);
      expect(response.title).toBe('foobar');
    });

    it('Должен корректно отправлять DELETE-запрос', async () => {
      const { status } = await httpClient.delete('/posts/1');
      expect(status).toBe(200);
    });
  });
});
