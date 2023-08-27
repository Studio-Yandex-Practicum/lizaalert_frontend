import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { ProcessEnum } from 'utils/constants';

type BasePaginationState = {
  /** Следующая подгружаемая страница. */
  page: number;
  /** Количество элементов, которые необходимо подгрузить за один запрос. */
  pageSize: number;
};

export type UsePaginationStateConfig<State> = {
  /** Длина массива данных */
  dataLength: number;
  /** Начальный стейт пагинации, по умолчанию берется из констант. */
  initialPageSize?: number;
  /** Дополнительные поля для стейта. */
  state?: State;
};

export type PaginationState<State> = BasePaginationState & State;

export type WithInfiniteScrollConfig<T, State> = {
  /** Стейт пагинации из хука usePaginationState */
  pagination: PaginationState<State>;
  /** Сеттер пагинации из хука usePaginationState */
  setPagination: Dispatch<SetStateAction<PaginationState<State>>>;
  /** Типизируемый через Generic массив с данными. */
  data: T[];
  /** Общее количество элементов, которое будет отображено. */
  total: number;
  /** Ошибка, которая может возникнуть при загрузке ленты. При ошибке прекращаются все дальнейшие запросы. */
  error?: string | null;
  /** Процесс выполнения запроса. */
  process: ProcessEnum;
  /** То, что нужно отобразить из родителя. */
  children: ReactNode;
  /** Функция-коллбек для загрузки данных при прокрутке вниз. */
  actionOnIntersect: (state: PaginationState<State>) => Promise<void>;
  /** Сообщение при отсутствии данных */
  noDataMessage?: string;
};
