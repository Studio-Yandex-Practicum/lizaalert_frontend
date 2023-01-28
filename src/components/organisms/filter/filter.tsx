import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import { Button } from 'components/molecules/button';
import { Checkbox } from 'components/molecules/checkbox';
import { Tag } from 'components/molecules/tag';
import styles from './filter.module.scss';
import type { FilterProps } from './types';
import { useFilter } from './hooks/use-filter';
import { filters } from './constants';

/**
 * Компонент-фильтр со списком чекбоксов, оформленный аккордеоном.
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
          <Typography size="l" htmlTag="h3" weight="bold" text="Фильтры" />

          {selection.length > 0 && (
            <Button view="text" onClick={resetFilters} text="Очистить" />
          )}
        </div>

        {filters.map((section) => (
          <Accordion
            title={countSectionSelection(section)}
            titleSize="m"
            titleWeight="normal"
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
