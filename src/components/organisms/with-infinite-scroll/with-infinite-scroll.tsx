import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/molecules/loader';
import useIntersectionObserver from './hooks/use-intersection-observer';
import { PaginationState, WithInfiniteScrollConfig } from './types';

/**
 * @description HOC для создания бесконечной прокрутки
 *
 * @props
 * - initialPaginationState - { page: number, pageSize: number } - начальный стейт пагинации, по умолчанию page=1 и pageSize=10
 * - data - array, required - типизируемый массив с данными
 * - total - number - общее количество элементов в базе
 * - isLoading - boolean, required - флаг индикатора загрузки, по нему появляется прелоадер последнего элемента
 * - children - ReactNode, required - то, что нужно отобразить из родителя
 * - actionOnIntersect - (state: PaginationState) => void - коллбек для загрузки данных при прокрутке вниз
 * */

function WithInfiniteScroll<T>({
  initialPaginationState = {
    page: 1,
    pageSize: 10,
  },
  data,
  total = 0,
  isLoading,
  children,
  actionOnIntersect,
}: WithInfiniteScrollConfig<T>) {
  const loadMoreRef = useRef(null);
  const [pagination, setPagination] = useState<PaginationState>(
    initialPaginationState
  );

  const fetchData = (paginationState: PaginationState) => {
    if (data.length === 0 || data.length < total) {
      actionOnIntersect(paginationState);
      setPagination((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
      }));
    }
  };

  useEffect(() => {
    fetchData(initialPaginationState);
  }, []);

  useIntersectionObserver({
    elementRef: loadMoreRef,
    callbackOnIntersect: () => {
      fetchData(pagination);
    },
  });

  return (
    <>
      {children}

      {isLoading && <Loader />}

      {!isLoading && data.length > 0 && data.length < total && (
        <span aria-hidden ref={loadMoreRef} />
      )}
    </>
  );
}

export default WithInfiniteScroll;
