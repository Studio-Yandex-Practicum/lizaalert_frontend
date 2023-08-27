export type FilterOptionModel = {
  /** Название опции фильтра */
  name: string;
  /** Код опции фильтра */
  id: number;
};

export type FilterModel = {
  /** Название фильтра */
  name: string;
  /** Код фильтра */
  slug: string;
  /** Список опций */
  options: FilterOptionModel[];
};

export type CoursesFiltersModel = FilterModel[];
