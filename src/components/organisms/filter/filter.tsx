import { ChangeEvent, FC, memo } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import { Checkbox } from 'components/molecules/checkbox';
import { Button } from 'components/molecules/button';
import { Tag } from 'components/molecules/tag';
import { Loader } from 'components/molecules/loader';
import { ErrorLocker } from 'components/organisms/error-locker';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { useEvent } from 'hooks/use-event';
import type { FilterProps, RemoveFilterArgs } from './types';
import { useFilter } from './hooks/use-filter';
import styles from './filter.module.scss';

/**
 * Мемоизированный компонент-фильтр со списком чекбоксов, оформленный аккордеоном.
 */

export const Filter: FC<FilterProps> = memo(
  ({ className, filters, onFilterSelection, process, onError }) => {
    const {
      tags,
      selection,
      resetFilters,
      countSectionSelection,
      selectFilter,
      removeFilter,
      getQueryParams,
    } = useFilter();

    const isLoading = LOADING_PROCESS_MAP[process];
    const isError = process === ProcessEnum.Failed;

    const handleSelectFilter = useEvent(
      (evt: ChangeEvent<HTMLInputElement>) => {
        selectFilter(evt);
        onFilterSelection(getQueryParams(selection));
      }
    );

    const handleRemoveFilter = useEvent((args: RemoveFilterArgs) => {
      removeFilter(args);
      onFilterSelection(getQueryParams(selection));
    });

    const handleResetFilters = useEvent(() => {
      resetFilters();
      onFilterSelection(getQueryParams(selection));
    });

    return (
      <aside className={classnames(styles.filters, className)}>
        <Card className={styles.card}>
          {isLoading && <Loader />}

          {isError && (
            <ErrorLocker
              heading="Ой! Фильтры не загрузились"
              onClick={onError}
              className={styles.error}
            />
          )}

          {!isLoading && !isError && (
            <>
              <div className={styles.header}>
                <Heading level={3} size="l" weight="bold" text="Фильтры" />

                {!!tags.length && (
                  <Button
                    view="text"
                    onClick={handleResetFilters}
                    text="Очистить"
                  />
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
                      onChange={handleSelectFilter}
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
              onClick={handleRemoveFilter}
              className={styles.tag}
            />
          ))}
        </div>
      </aside>
    );
  }
);
