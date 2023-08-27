import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useEvent } from 'hooks/use-event';
import type {
  FilterLabelsMap,
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
  const labelsMap = useRef<FilterLabelsMap>({});

  const removeFilter = useEvent(({ section, slug }: RemoveFilterArgs) => {
    setSelection((prevSelection) => {
      const newSelection = { ...prevSelection };
      newSelection[section] = new Set(prevSelection[section]);

      newSelection[section].delete(slug);

      if (!newSelection[section].size) {
        delete newSelection[section];
      }

      return newSelection;
    });
  });

  const selectFilter = useEvent(({ target }: ChangeEvent<HTMLInputElement>) => {
    const name = target.dataset.label ?? '';
    const slug = target.value;
    const section = target.name;
    const filters = selection[section];

    if (!labelsMap.current[slug]) {
      labelsMap.current[slug] = name;
    }

    if (!filters) {
      setSelection((prevSelection) => ({
        ...prevSelection,
        [section]: new Set([slug]),
      }));
      return;
    }

    if (filters.has(slug)) {
      removeFilter({ section, slug });
      return;
    }

    setSelection((prevSelection) => {
      const newSelection = { ...prevSelection };
      newSelection[section] = new Set(prevSelection[section]);
      newSelection[section].add(slug);
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
      acc[curr] = Array.from(filters[curr]).join(',');
      return acc;
    }, {} as FilterParams)
  );

  const getTags = useEvent((filters: FilterSelection) => {
    const selected: TagType[] = [];

    Object.keys(filters).forEach((section) =>
      filters[section].forEach((slug) =>
        selected.push({
          section,
          slug,
          name: labelsMap.current[slug],
        })
      )
    );

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
