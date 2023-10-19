import type { FC } from 'react';
import { Card } from 'components/atoms/card';
import { Heading, P, Span } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { convertDate } from 'utils/convert-date';
import { useTest } from '../test/hooks/use-test';
import type { TextPreviewProps } from './types';
import styles from './test-preview.module.scss';

/**
 * Компонент-карточка превью теста.
 */

export const TestPreview: FC<TextPreviewProps> = ({ toggleRender }) => {
  const { test } = useTest();

  return (
    <Card htmlTag="section" className={styles.container}>
      <div className={styles.propertiesRow}>
        <Heading level={2} size="l" weight="bold" text={test.title} />

        {test.in_progress && (
          <Button view="text" onClick={toggleRender} text="Вернуться к тесту" />
        )}
      </div>

      <P text={test.description} />

      <ul className={styles.properties}>
        {test.passing_score && (
          <li className={styles.propertiesRow}>
            <TextWithIcon
              htmlTag="span"
              iconType="check"
              text="Проходной балл:"
            />
            <Span text={`${test.passing_score}%`} />
          </li>
        )}
        {test.retries !== undefined && (
          <li className={styles.propertiesRow}>
            <TextWithIcon
              htmlTag="span"
              iconType="retry"
              text="Количество попыток:"
            />
            <Span text={test.retries} />
          </li>
        )}
        {test.deadline && (
          <li className={styles.propertiesRow}>
            <TextWithIcon htmlTag="span" iconType="time" text="Срок сдачи:" />
            <Span
              text={`${convertDate(test.deadline)} г. ${convertDate(
                test.deadline,
                { onlyTime: true }
              )} (GMT+3)`}
            />
          </li>
        )}
      </ul>

      {!test.in_progress && (
        <Button
          className={styles.button}
          onClick={toggleRender}
          text="Начать тест"
        />
      )}
    </Card>
  );
};
