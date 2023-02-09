import { useLayoutEffect, useRef } from 'react';

/**
 * Почти как useCallback, но с важными отличиями:
 * - Возвращаемая функция является стабильной ссылкой
 * - Нет спсика зависимостей
 * - Имеет доступ к текущим значениям переменных снаружи
 */

export function useEvent<T extends AnyFunction>(callback: T): T {
  const latestRef = useRef<T>(callback);

  useLayoutEffect(() => {
    latestRef.current = callback;
  }, [callback]);

  const stableRef = useRef<T | null>(null);

  if (!stableRef.current) {
    stableRef.current = function handler(this: any) {
      // Выключаем правило для универсальности
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-return,prefer-rest-params
      return latestRef.current.apply(this, arguments as any);
    } as T;
  }

  return stableRef.current;
}
