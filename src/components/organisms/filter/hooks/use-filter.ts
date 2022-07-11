import { useState } from 'react';
import { Filters, Statuses } from '../../../../utils/constants';
import { FilterItem, SectionType } from '../constants';

export const useFilter = () => {
  const [selection, setSelection] = useState<FilterItem[]>([]);

  const handleActivityFilters = (filter: FilterItem) => {
    const opposite = {
      name: Filters.STATUS,
      value:
        filter.value === Statuses.ACTIVE ? Statuses.INACTIVE : Statuses.ACTIVE,
    };

    let isExists = false;
    let isOppositeExists = false;

    for (let i = 0; i < selection.length; i += 1) {
      const item = selection[i];
      if (item.value === filter.value && item.name === filter.name) {
        isExists = true;
        break;
      }

      if (item.value === opposite.value && item.name === opposite.name) {
        isOppositeExists = true;
        break;
      }
    }

    if (!isExists && !isOppositeExists) {
      setSelection((prevState) => [...prevState, filter]);
      return;
    }

    if (isExists) {
      setSelection((prevSelection) =>
        prevSelection.filter((item) => item.value !== filter.value)
      );
      return;
    }

    setSelection((prevSelection) =>
      prevSelection.map((item) => {
        if (item.value === opposite.value) return filter;

        return item;
      })
    );
  };

  const selectFilter = (filter: FilterItem) => {
    if (
      (filter.name === Filters.STATUS && filter.value === Statuses.ACTIVE) ||
      (filter.name === Filters.STATUS && filter.value === Statuses.INACTIVE)
    ) {
      handleActivityFilters(filter);
      return;
    }

    const isExists = selection.some(
      (item) => item.value === filter.value && item.name === filter.name
    );

    if (!isExists) {
      setSelection((prevState) => [...prevState, filter]);
      return;
    }

    setSelection((prevSelection) =>
      prevSelection.filter((item) => item.value !== filter.value)
    );
  };

  const resetFilters = () => setSelection([]);

  const countSectionSelection = (section: SectionType) => {
    const sectionChoice = selection.filter(
      (item) => item.name === section.name.value
    );

    return sectionChoice.length > 0
      ? `${section.name.label} (${sectionChoice.length})`
      : section.name.label;
  };

  const removeFilter = (value: string) => {
    setSelection((prevSelection) =>
      prevSelection.filter((filter) => filter.value !== value)
    );
  };

  return {
    selection,
    resetFilters,
    countSectionSelection,
    selectFilter,
    removeFilter,
  };
};
