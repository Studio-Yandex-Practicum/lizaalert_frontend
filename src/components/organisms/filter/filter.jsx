import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../molecules/button/button';
import Accordion from '../../templates/accordion/accordion';
import Card from '../../templates/card/card';
import styles from './filter.module.scss';
import Checkbox from '../../molecules/checkbox/checkbox';
import Tag from '../../molecules/tag/tag';

function Filter({ className }) {
  const filters = [
    {
      name: { label: 'Категория', value: 'category' },
      options: [],
    },
    {
      name: { label: 'Тематика', value: 'theme' },
      options: [],
    },
    {
      name: { label: 'Уровень', value: 'level' },
      options: [
        { label: 'Новичок', value: 'new', name: 'level' },
        { label: 'Бывалый', value: 'experienced', name: 'level' },
        { label: 'Профессионал', value: 'professional', name: 'level' },
      ],
    },
    {
      name: { label: 'Статус', value: 'status' },
      options: [
        { label: 'Не активный', value: 'not-active', name: 'status' },
        { label: 'Вы записаны', value: 'booked', name: 'status' },
        { label: 'Активный', value: 'acctive', name: 'status' },
        { label: 'Пройден', value: 'finished', name: 'status' },
      ],
    },
  ];

  const [selection, setSelection] = useState([]);

  const filterChangeHandler = (filter) => {
    const filterIndex = selection.findIndex(
      (item) => item.value === filter.value && item.name === filter.name
    );
    if (filterIndex < 0) {
      setSelection([...selection, filter]);
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
