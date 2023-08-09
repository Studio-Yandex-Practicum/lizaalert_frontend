export type FilterOptionModel = {
  /** Название опции фильтра */
  name: string;
  /** Код опции фильтра */
  slug: string;
};

export type FilterModel = {
  /** Название фильтра */
  name: string;
  /** Код фильтра */
  slug: string;
  /** Список опций */
  options: FilterOptionModel[];
};

export type CoursesFiltersModel = {
  /** Общее количество фильтров в базе данных. */
  count: number | null;
  /** Список фильтров. */
  results: FilterModel[];
};
