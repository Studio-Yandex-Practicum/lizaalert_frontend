import { useEffect } from 'react';

/**
 * @description Хук прокручивает страницу наверх при обновлении зависимостей.
 * */

const useScrollToTop = (...deps: unknown[]) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [...deps]);
};

export default useScrollToTop;
