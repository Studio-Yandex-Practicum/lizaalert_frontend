import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/molecules/loader';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'utils/constants';
import useIntersectionObserver from './hooks/use-intersection-observer';
import { PaginationState, WithInfiniteScrollConfig } from './types';
import styles from './with-infinite-scroll.module.scss';

/**
 * @description HOC для создания бесконечной прокрутки
 *
 * @props
 * - initialPaginationState - { page: number, pageSize: number } - начальный стейт пагинации, по умолчанию берется из констант
 * - data - array, required - типизируемый массив с данными
 * - total - number - общее количество элементов в базе
 * - isLoading - boolean, required - флаг индикатора загрузки, по нему появляется прелоадер последнего элемента
 * - children - ReactNode, required - то, что нужно отобразить из родителя
 * - actionOnIntersect - (state: PaginationState) => void - коллбек для загрузки данных при прокрутке вниз
 * */

function WithInfiniteScroll<T>({
  initialPaginationState = {
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  },
  data,
  total,
  isLoading,
  children,
  actionOnIntersect,
}: WithInfiniteScrollConfig<T>) {
  const loadMoreRef = useRef(null);
  const [pagination, setPagination] = useState<PaginationState>(
    initialPaginationState
  );

  const fetchData = async (paginationState: PaginationState) => {
    if (data.length === 0 || data.length < total) {
      await actionOnIntersect(paginationState);
      setPagination((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
      }));
    }
  };

  useEffect(() => {
    void fetchData(initialPaginationState);
  }, []);

  useIntersectionObserver({
    elementRef: loadMoreRef,
    callbackOnIntersect: () => {
      void fetchData(pagination);
    },
  });

  return (
    <div className={styles.scrollContainer}>
      {children}

      {isLoading && <Loader />}

      {!isLoading && data.length > 0 && data.length < total && (
        <span aria-hidden ref={loadMoreRef} />
      )}
    </div>
  );
}

export default WithInfiniteScroll;
