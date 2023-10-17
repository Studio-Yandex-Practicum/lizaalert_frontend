import { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Loader } from 'components/molecules/loader';
import { ErrorLocker } from 'components/organisms/error-locker';
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
  noDataHeading,
  noDataMessage,
}: WithInfiniteScrollConfig<T, State>): JSX.Element => {
  const loadMoreRef = useRef(null);
  const isInitialRender = useRef(true);

  const isLoading = LOADING_PROCESS_MAP[process];
  const hasMoreData = data.length < total;
  const hasNoData = !data.length;
  const shouldLoad =
    process === ProcessEnum.Initial || (hasMoreData && !isLoading);
  const showNoDataCard =
    hasNoData &&
    (noDataMessage || noDataHeading) &&
    process === ProcessEnum.Succeeded;

  const fetchData = (paginationState: PaginationState<State>) => {
    if (shouldLoad || (error && hasNoData)) {
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
    <div className={classnames(styles.scrollContainer, styles.flexContainer)}>
      {!hasNoData && children}

      {isLoading && <Loader />}

      {showNoDataCard && (
        <Card className={styles.flexContainer}>
          {noDataHeading && (
            <Heading
              text={noDataHeading}
              level={2}
              size="l"
              textAlign="center"
              weight="bold"
            />
          )}
          {noDataMessage && <P text={noDataMessage} textAlign="center" />}
        </Card>
      )}

      {!error && shouldLoad && <span aria-hidden ref={loadMoreRef} />}

      {error && hasNoData && (
        <ErrorLocker className={styles.stubCard} onClick={requestData} isCard />
      )}

      {error && !hasNoData && (
        <Button
          className={styles.button}
          text="Загрузить ещё"
          onClick={requestData}
        />
      )}
    </div>
  );
};
