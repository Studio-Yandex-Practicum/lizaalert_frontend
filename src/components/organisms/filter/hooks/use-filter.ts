import { ChangeEvent, useCallback, useState } from 'react';
import { useEvent } from 'hooks/use-event';
import type {
  FilterParams,
  FilterSelection,
  RemoveFilterArgs,
  TagType,
} from '../types';

/**
 * Хук реализует логику фильтрации.
 * Возвращает массив выбранных опций и функции-обработчики для корректной работы фильтров.
 * */

export const useFilter = () => {
  const [selection, setSelection] = useState<FilterSelection>({});

  const removeFilter = useEvent(({ section, slug }: RemoveFilterArgs) => {
    setSelection((prevSelection) => {
      const newSelection = { ...prevSelection };
      newSelection[section] = { ...prevSelection[section] };
      delete newSelection[section][slug];

      if (!Object.keys(newSelection[section]).length) {
        delete newSelection[section];
      }

      return newSelection;
    });
  });

  const selectFilter = useEvent(({ target }: ChangeEvent<HTMLInputElement>) => {
    const name = target.dataset.label ?? '';
    const slug = target.value;
    const section = target.name;
    const options = selection[section];

    if (!options) {
      setSelection((prevSelection) => ({
        ...prevSelection,
        [section]: { [slug]: name },
      }));
      return;
    }

    if (options[slug]) {
      removeFilter({ section, slug });
      return;
    }

    setSelection((prevSelection) => {
      const newSelection = { ...prevSelection };
      newSelection[section] = { ...prevSelection[section], [slug]: name };
      return newSelection;
    });
  });

  const resetFilters = useCallback(() => setSelection({}), []);

  const countSectionSelection = useEvent((sectionName: string, size?: number) =>
    size && size > 0 ? `${sectionName} (${size})` : sectionName
  );

  const getQueryParams = useEvent((filters: FilterSelection) =>
    Object.keys(filters).reduce((acc, curr) => {
      // eslint-disable-next-line no-param-reassign
      acc[curr] = Object.keys(filters[curr]).join(',');
      return acc;
    }, {} as FilterParams)
  );

  const getTags = useEvent((filters: FilterSelection) => {
    const selected: TagType[] = [];

    Object.keys(filters).forEach((section) => {
      Object.keys(filters[section]).forEach((slug) =>
        selected.push({
          section,
          slug,
          name: filters[section][slug],
        })
      );
    });

    return selected;
  });

  return {
    tags: getTags(selection),
    selection,
    resetFilters,
    countSectionSelection,
    selectFilter,
    removeFilter,
    getQueryParams,
  };
};
