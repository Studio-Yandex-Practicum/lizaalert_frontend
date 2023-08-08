import type { ReactNode } from 'react';
import { ProcessEnum } from 'utils/constants';

export type PaginationState = {
  /** Следующая подгружаемая страница. */
  page: number;
  /** Количество элементов, которые необходимо подгрузить за один запрос. */
  pageSize: number;
};

export type WithInfiniteScrollConfig<T> = {
  /** Начальный стейт пагинации, по умолчанию берется из констант. */
  initialPageSize?: number;
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
  actionOnIntersect: (state: PaginationState) => Promise<void>;
  /** Сообщение при отсутствии данных */
  noDataMessage?: string;
};
