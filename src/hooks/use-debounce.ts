import { useCallback, useRef } from 'react';
import { DELAY_DEBOUNCE } from 'utils/constants';

/**
 * Хук для отложенного вызова передаваемого коллбека.
 * Полезно для частых запросов к API.
 * */

export const useDebounce = <T, R>(
  callback: (...args: T[]) => R,
  delay: number = DELAY_DEBOUNCE
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (...args: T[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
