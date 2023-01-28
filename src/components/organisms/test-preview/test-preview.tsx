import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { convertDate } from 'utils/convert-date';
import styles from './test-preview.module.scss';
import type { TextPreviewProps } from './types';

/**
 * Компонент-карточка превью теста.
 */

function TestPreview({ test, toggleRender }: TextPreviewProps) {
  const date = convertDate(test.deadline);
  const time = convertDate(test.deadline, { onlyTime: true });

  return (
    <Card htmlTag="section" className={styles.container}>
      <div className={styles.propertiesRow}>
        <Typography htmlTag="h2" size="l" weight="bold" text="Тест" />

        {test.inProgress && (
          <Button view="text" onClick={toggleRender} text="Вернуться к тесту" />
        )}
      </div>

      <Typography text={test.description} />

      <ul className={styles.properties}>
        <li className={styles.propertiesRow}>
          <TextWithIcon
            htmlTag="span"
            iconType="check"
            text="Проходной балл:"
          />
          <Typography htmlTag="span" text={`${test.passingScore}%`} />
        </li>
        <li className={styles.propertiesRow}>
          <TextWithIcon
            htmlTag="span"
            iconType="retry"
            text="Количество попыток:"
          />
          <Typography htmlTag="span" text={test.retries} />
        </li>
        <li className={styles.propertiesRow}>
          <TextWithIcon htmlTag="span" iconType="time" text="Срок сдачи:" />
          <Typography htmlTag="time" text={`${date} г. ${time} (GMT+3)`} />
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
}

export default TestPreview;
