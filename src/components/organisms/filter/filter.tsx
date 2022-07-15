import classnames from 'classnames';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Accordion } from '../../molecules/accordion';
import { Button } from '../../molecules/button';
import { Checkbox } from '../../molecules/checkbox';
import { Tag } from '../../molecules/tag';
import styles from './filter.module.scss';
import { FilterProps } from './types';
import { useFilter } from './hooks/use-filter';
import { filters } from './constants';

/**
 * @description Компонент-фильтр со списком чекбоксов, оформленный аккордеоном.
 *
 * @props
 * - className - string - класс-миксин для внешнего контейнера
 */

function Filter({ className = '' }: FilterProps) {
  const {
    selection,
    resetFilters,
    countSectionSelection,
    selectFilter,
    removeFilter,
  } = useFilter();

  return (
    <aside className={classnames(styles.filters, className)}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <Heading size="l" level={3} title="Фильтры" />
          {selection.length > 0 && (
            <Button view="text" onClick={resetFilters}>
              Очистить
            </Button>
          )}
        </div>
        {filters.map((section) => (
          <Accordion
            title={countSectionSelection(section)}
            key={section.name.value}
            className={styles.filterAccordion}
          >
            {section.options.map((checkbox) => (
              <Checkbox
                key={checkbox.value}
                className={styles.checkbox}
                name={section.name.value}
                value={checkbox.value}
                labelText={checkbox.label}
                checked={selection.some(
                  (filter) =>
                    filter.name === checkbox.name &&
                    filter.value === checkbox.value
                )}
                onChange={() => selectFilter(checkbox)}
              />
            ))}
          </Accordion>
        ))}
      </Card>
      <div className={styles.selection}>
        {selection.map((filter) => (
          <Tag
            key={filter.value}
            text={filter.label}
            value={filter.value}
            onClick={removeFilter}
            className={styles.tag}
          />
        ))}
      </div>
    </aside>
  );
}

export default Filter;
