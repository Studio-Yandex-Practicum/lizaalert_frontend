import { useEffect, useRef } from 'react';
import { P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Loader } from 'components/molecules/loader';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { useIntersectionObserver } from 'hooks/use-intersection-observer';
import type { PaginationState, WithInfiniteScrollConfig } from './types';
import styles from './with-infinite-scroll.module.scss';

/**
 * HOC для создания бесконечной прокрутки. Можно типизировать приходящие данные через Generic.
 * */

export const WithInfiniteScroll = <T extends Record<string, unknown>, State>({
  pagination,
  setPagination,
  data,
  total,
  error,
  process,
  children,
  actionOnIntersect,
  noDataMessage,
}: WithInfiniteScrollConfig<T, State>): JSX.Element => {
  const loadMoreRef = useRef(null);
  const isInitialRender = useRef(true);

  const isLoading = LOADING_PROCESS_MAP[process];
  const hasMoreData = data.length < total;
  const hasNoData = !data.length;
  const shouldLoad =
    process === ProcessEnum.Initial || (hasMoreData && !isLoading);

  const fetchData = (paginationState: PaginationState<State>) => {
    if (shouldLoad) {
      void actionOnIntersect(paginationState);
    }
  };

  const requestData = () => {
    void fetchData(pagination);
  };

  useIntersectionObserver({
    elementRef: loadMoreRef,
    callbackOnIntersect: requestData,
  });

  const getNextPage = (prevState: PaginationState<State>) => {
    if (process === ProcessEnum.Initial) {
      return 1;
    }

    return process === ProcessEnum.Succeeded
      ? prevState.page + 1
      : prevState.page;
  };

  useEffect(() => {
    if (!isInitialRender.current) {
      setPagination((prevState) => ({
        ...prevState,
        page: getNextPage(prevState),
      }));
    }

    isInitialRender.current = false;
  }, [process]);

  return (
    <div className={styles.scrollContainer}>
      {!hasNoData && children}

      {isLoading && <Loader />}

      {hasNoData && noDataMessage && process === ProcessEnum.Succeeded && (
        <P text={noDataMessage} textAlign="center" weight="bold" />
      )}

      {!error && shouldLoad && <span aria-hidden ref={loadMoreRef} />}

      {error && (
        <Button
          className={styles.button}
          text="Загрузить ещё"
          onClick={requestData}
        />
      )}
    </div>
  );
};
