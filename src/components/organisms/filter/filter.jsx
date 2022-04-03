import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../molecules/button/button';
import Accordion from '../../templates/accordion/accordion';
import Card from '../../templates/card/card';
import Checkbox from '../../molecules/checkbox/checkbox';
import Tag from '../../molecules/tag/tag';
import { Filters, Statuses, Levels } from '../../../utils/constants';
import styles from './filter.module.scss';

function Filter({ className }) {
  const filters = [
    {
      name: { label: 'Категория', value: Filters.CATEGORY },
      options: [],
    },
    {
      name: { label: 'Тематика', value: Filters.THEME },
      options: [],
    },
    {
      name: { label: 'Уровень', value: Filters.LEVEL },
      options: [
        { label: 'Новичок', value: Levels.NEW, name: Filters.LEVEL },
        { label: 'Бывалый', value: Levels.EXPERIENCED, name: Filters.LEVEL },
        { label: 'Профессионал', value: Levels.PRO, name: Filters.LEVEL },
      ],
    },
    {
      name: { label: 'Статус', value: Filters.STATUS },
      options: [
        {
          label: 'Не активный',
          value: Statuses.INACTIVE,
          name: Filters.STATUS,
        },
        { label: 'Вы записаны', value: Statuses.BOOKED, name: Filters.STATUS },
        { label: 'Активный', value: Statuses.ACTIVE, name: Filters.STATUS },
        { label: 'Пройден', value: Statuses.FINISHED, name: Filters.STATUS },
      ],
    },
  ];

  const [selection, setSelection] = useState([]);

  const activityFilterChangeHandler = (filter) => {
    const oppositFilter = { name: Filters.STATUS };
    if (filter.value === Statuses.ACTIVE) {
      oppositFilter.value = Statuses.INACTIVE;
    } else {
      oppositFilter.value = Statuses.ACTIVE;
    }
    const filterIndex = selection.findIndex(
      (item) => item.value === filter.value && item.name === filter.name
    );
    const oppositFilterIndex = selection.findIndex(
      (item) =>
        item.value === oppositFilter.value && item.name === oppositFilter.name
    );
    if (filterIndex < 0 && oppositFilterIndex < 0) {
      setSelection((prevState) => [...prevState, filter]);
    } else if (filterIndex < 0 && oppositFilterIndex >= 0) {
      const newFilters = [...selection];
      newFilters.splice(oppositFilterIndex, 1);
      setSelection([...newFilters, filter]);
    } else {
      const newFilters = [...selection];
      newFilters.splice(filterIndex, 1);
      setSelection(newFilters);
    }
  };

  const filterChangeHandler = (filter) => {
    if (
      (filter.name === Filters.STATUS && filter.value === Statuses.ACTIVE) ||
      (filter.name === Filters.STATUS && filter.value === Statuses.INACTIVE)
    ) {
      activityFilterChangeHandler(filter);
      return;
    }

    const filterIndex = selection.findIndex(
      (item) => item.value === filter.value && item.name === filter.name
    );
    if (filterIndex < 0) {
      setSelection((prevState) => [...prevState, filter]);
    } else {
      const newFilters = [...selection];
      newFilters.splice(filterIndex, 1);
      setSelection(newFilters);
    }
  };

  const filterResetHandler = (evt) => {
    evt.preventDefault();
    setSelection([]);
  };

  const countSectionSelection = (section) => {
    const sectionChoice = selection.filter(
      (item) => item.name === section.name.value
    );

    return sectionChoice.length > 0
      ? `${section.name.label} (${sectionChoice.length})`
      : section.name.label;
  };

  const tagClickHandler = (value) => {
    setSelection(selection.filter((filter) => filter.value !== value));
  };

  return (
    <div className={className}>
      <Card className={styles.filters}>
        <div className={styles.header}>
          <h2>Фильтры</h2>
          <Button view="text" onClick={filterResetHandler}>
            Очистить
          </Button>
        </div>
        {filters.map((section) => (
          <Accordion
            title={countSectionSelection(section)}
            key={section.name.value}
            className={styles.filterAccordion}
          >
            {section.options.map((checkbox) => {
              const isChecked =
                selection.findIndex(
                  (filter) =>
                    filter.name === checkbox.name &&
                    filter.value === checkbox.value
                ) >= 0;
              return (
                <Checkbox
                  key={checkbox.value}
                  className={styles.checkbox}
                  name={section.name.value}
                  value={checkbox.value}
                  labelText={checkbox.label}
                  checked={isChecked}
                  onChange={() => {
                    filterChangeHandler(checkbox);
                  }}
                />
              );
            })}
          </Accordion>
        ))}
      </Card>
      <div className={styles.selection}>
        {selection.map((filter) => (
          <Tag
            key={filter.value}
            text={filter.label}
            value={filter.value}
            onClick={tagClickHandler}
            className={styles.tag}
          />
        ))}
      </div>
    </div>
  );
}

Filter.defaultProps = {
  className: '',
};

Filter.propTypes = {
  className: PropTypes.string,
};

export default Filter;
