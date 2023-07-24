import type { MutableRefObject, ReactNode } from 'react';

export type IntersectionObserverConfig = {
  /** ref элемента, за которым нужно наблюдать (из useRef). */
  elementRef: MutableRefObject<null>;
  /** Функция-коллбек, срабатывающая при появлении элемента во вьюпорте. */
  callbackOnIntersect: VoidFunction;
  /** Функция-коллбек, срабатывающая при скрытии элемента из вьюпорта. */
  callbackOnHide?: VoidFunction;
  /** Отступы вокруг элемента. */
  rootMargin?: string;
  /** Процент от высоты элемента, которая может быть показана, прежде чем сработает обработчик. */
  threshold?: number;
};

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
  data: Nullable<T[]>;
  /** Общее количество элементов, которое будет отображено. */
  total: number;
  /** Ошибка, которая может возникнуть при загрузке ленты. При ошибке прекращаются все дальнейшие запросы. */
  error?: string | null;
  /** Флаг индикатора загрузки, по нему появляется прелоадер последнего элемента. */
  isLoading: boolean;
  /** То, что нужно отобразить из родителя. */
  children: ReactNode;
  /** Функция-коллбек для загрузки данных при прокрутке вниз. */
  actionOnIntersect: (state: PaginationState) => Promise<void>;
};
