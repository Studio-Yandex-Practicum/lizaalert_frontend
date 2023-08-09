import type { FilterModel } from 'api/courses-filters';
import { ProcessEnum } from 'utils/constants';

export type FilterSelection = {
  [key: string]: Set<string>;
};

export type FilterLabelsMap = {
  [key: string]: string;
};

export type FilterParams = {
  [key: string]: string;
};

export type TagType = {
  section: string;
  slug: string;
  name: string;
};

export type RemoveFilterArgs = {
  section: string;
  slug: string;
};

export type FilterProps = {
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Массив фильтров */
  filters: FilterModel[];
  /** Обработчик выбора фильтра */
  onFilterSelection: (params: FilterParams) => void;
  /** Процесс загрузки */
  process: ProcessEnum;
  /** Обработчик ошибки загрузки фильтров */
  onError: () => void;
};
