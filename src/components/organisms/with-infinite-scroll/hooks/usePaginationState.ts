import { Dispatch, SetStateAction, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import type { PaginationState, UsePaginationStateConfig } from '../types';

/**
 * Хук для управления пагинацией при использовании бесконечной прокрутки.
 * Возможно расширение стейта через проп `state`.
 * */

export const usePaginationState = <State>({
  dataLength,
  initialPageSize = DEFAULT_PAGE_SIZE,
  state = {} as State,
}: UsePaginationStateConfig<State>): [
  PaginationState<State>,
  Dispatch<SetStateAction<PaginationState<State>>>
] => {
  const [pagination, setPagination] = useState<PaginationState<State>>({
    page: Math.ceil(dataLength / initialPageSize + 1),
    pageSize: initialPageSize,
    ...state,
  });

  return [pagination, setPagination];
};
