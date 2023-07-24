import type { FC } from 'react';
import { Card } from 'components/atoms/card';
import { Heading, P, Span } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { convertDate } from 'utils/convert-date';
import styles from './test-preview.module.scss';
import type { TextPreviewProps } from './types';

/**
 * Компонент-карточка превью теста.
 */

export const TestPreview: FC<TextPreviewProps> = ({ test, toggleRender }) => {
  const date = convertDate(test.deadline);
  const time = convertDate(test.deadline, { onlyTime: true });

  return (
    <Card htmlTag="section" className={styles.container}>
      <div className={styles.propertiesRow}>
        <Heading level={2} size="l" weight="bold" text="Тест" />

        {test.inProgress && (
          <Button view="text" onClick={toggleRender} text="Вернуться к тесту" />
        )}
      </div>

      <P text={test.description} />

      <ul className={styles.properties}>
        <li className={styles.propertiesRow}>
          <TextWithIcon
            htmlTag="span"
            iconType="check"
            text="Проходной балл:"
          />
          <Span text={`${test.passingScore}%`} />
        </li>
        <li className={styles.propertiesRow}>
          <TextWithIcon
            htmlTag="span"
            iconType="retry"
            text="Количество попыток:"
          />
          <Span text={test.retries} />
        </li>
        <li className={styles.propertiesRow}>
          <TextWithIcon htmlTag="span" iconType="time" text="Срок сдачи:" />
          <Span text={`${date} г. ${time} (GMT+3)`} />
        </li>
      </ul>

      {!test.inProgress && (
        <Button
          className={styles.button}
          onClick={toggleRender}
          text="Начать тест"
        />
      )}
    </Card>
  );
};
