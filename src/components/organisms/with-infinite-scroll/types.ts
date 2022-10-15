import { ReactNode } from 'react';

export type PaginationState = {
  page: number;
  pageSize: number;
};

export type WithInfiniteScrollConfig<T> = {
  initialPageSize?: number;
  data: T[];
  total: number;
  error?: string | null;
  isLoading: boolean;
  children: ReactNode;
  actionOnIntersect: (state: PaginationState) => Promise<void>;
};
