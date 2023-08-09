import { useLayoutEffect, useRef } from 'react';

/**
 * Почти как useCallback, но с важными отличиями:
 * - Возвращаемая функция является стабильной ссылкой
 * - Нет спсика зависимостей
 * - Имеет доступ к текущим значениям переменных снаружи
 */

export function useEvent<T extends AnyFunction<ReturnType<T>>>(callback: T): T {
  const latestRef = useRef<T>(callback);

  useLayoutEffect(() => {
    latestRef.current = callback;
  }, [callback]);

  const stableRef = useRef<T | null>(null);

  if (!stableRef.current) {
    stableRef.current = function handler(this: never) {
      // Здесь не нужны rest-параметры
      // eslint-disable-next-line prefer-rest-params
      return latestRef.current.apply(this, arguments as never);
    } as T;
  }

  return stableRef.current;
}
