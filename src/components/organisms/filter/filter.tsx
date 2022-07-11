import classnames from 'classnames';
import { Card, Heading } from '../../atoms';
import { Accordion, Button, Checkbox, Tag } from '../../molecules';
import styles from './filter.module.scss';
import { useFilter } from './hooks/use-filter';
import { filters } from './constants';

type FilterProps = {
  className?: string;
};

const defaultProps = {
  className: '',
};

function Filter({ className }: FilterProps) {
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

Filter.defaultProps = defaultProps;

export default Filter;
