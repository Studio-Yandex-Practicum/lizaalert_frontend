import { useEffect } from 'react';

/**
 * Хук прокручивает страницу наверх при обновлении зависимостей.
 * */

export const useScrollToTop = (...deps: unknown[]) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [...deps]);
};
