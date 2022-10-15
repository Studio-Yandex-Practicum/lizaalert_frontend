import { useRef, useState } from 'react';
import { Loader } from 'components/molecules/loader';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import useIntersectionObserver from './hooks/use-intersection-observer';
import { PaginationState, WithInfiniteScrollConfig } from './types';
import styles from './with-infinite-scroll.module.scss';

/**
 * @description HOC для создания бесконечной прокрутки. Можно типизировать приходящие данные через Generic.
 *
 * @props
 * - initialPageSize - number - начальный стейт пагинации, по умолчанию берется из констант
 * - data - array, required - типизируемый массив с данными
 * - total - number, required - общее количество элементов в базе
 * - isLoading - boolean, required - флаг индикатора загрузки, по нему появляется прелоадер последнего элемента
 * - children - ReactNode, required - то, что нужно отобразить из родителя
 * - actionOnIntersect - (state: PaginationState) => void, required - коллбек для загрузки данных при прокрутке вниз
 * */

function WithInfiniteScroll<T>({
  initialPageSize = DEFAULT_PAGE_SIZE,
  data,
  total,
  error,
  isLoading,
  children,
  actionOnIntersect,
}: WithInfiniteScrollConfig<T>) {
  const loadMoreRef = useRef(null);
  const [pagination, setPagination] = useState<PaginationState>({
    // следующая страница
    page: data.length / initialPageSize + 1,
    pageSize: initialPageSize,
  });

  const fetchData = async (paginationState: PaginationState) => {
    if (data.length === 0 || data.length < total) {
      await actionOnIntersect(paginationState);
      setPagination((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
      }));
    }
  };

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

      {!isLoading && !error && (data.length === 0 || data.length < total) && (
        <span aria-hidden ref={loadMoreRef} />
      )}
    </div>
  );
}

export default WithInfiniteScroll;
