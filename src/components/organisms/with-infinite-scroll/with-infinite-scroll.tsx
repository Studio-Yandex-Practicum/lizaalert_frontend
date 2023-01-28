import { useRef, useState } from 'react';
import { Loader } from 'components/molecules/loader';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import styles from './with-infinite-scroll.module.scss';
import useIntersectionObserver from './hooks/use-intersection-observer';
import type { PaginationState, WithInfiniteScrollConfig } from './types';

/**
 * HOC для создания бесконечной прокрутки. Можно типизировать приходящие данные через Generic.
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
