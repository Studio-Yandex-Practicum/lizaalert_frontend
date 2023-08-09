import { FC, memo, useEffect } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import { Checkbox } from 'components/molecules/checkbox';
import { Button } from 'components/molecules/button';
import { Tag } from 'components/molecules/tag';
import { Loader } from 'components/molecules/loader';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import type { FilterProps } from './types';
import { useFilter } from './hooks/use-filter';
import styles from './filter.module.scss';

/**
 * Мемоизированный компонент-фильтр со списком чекбоксов, оформленный аккордеоном.
 */

export const Filter: FC<FilterProps> = memo(
  ({ className, filters, onFilterSelection, process }) => {
    const {
      tags,
      selection,
      resetFilters,
      countSectionSelection,
      selectFilter,
      removeFilter,
      getQueryParams,
    } = useFilter();

    useEffect(() => {
      onFilterSelection(getQueryParams(selection));
    }, [selection, tags]);

    const isLoading = LOADING_PROCESS_MAP[process];
    const isError = process === ProcessEnum.Failed;

    return (
      <aside className={classnames(styles.filters, className)}>
        <Card className={styles.card}>
          {isLoading && <Loader />}

          {!isLoading && !isError && (
            <>
              <div className={styles.header}>
                <Heading level={3} size="l" weight="bold" text="Фильтры" />

                {!!tags.length && (
                  <Button view="text" onClick={resetFilters} text="Очистить" />
                )}
              </div>

              {filters.map((section) => (
                <Accordion
                  key={section.slug}
                  title={countSectionSelection(
                    section.name,
                    selection[section.slug]?.size
                  )}
                  titleSize="m"
                  titleWeight="normal"
                  className={styles.filterAccordion}
                >
                  {section.options.map((option) => (
                    <Checkbox
                      key={option.slug}
                      className={styles.checkbox}
                      name={section.slug}
                      value={option.slug}
                      labelText={option.name}
                      checked={!!selection[section.slug]?.has(option.slug)}
                      onChange={selectFilter}
                    />
                  ))}
                </Accordion>
              ))}
            </>
          )}
        </Card>

        <div className={styles.selection}>
          {tags.map((tag) => (
            <Tag
              key={tag.slug}
              text={tag.name}
              value={tag}
              onClick={removeFilter}
              className={styles.tag}
            />
          ))}
        </div>
      </aside>
    );
  }
);
