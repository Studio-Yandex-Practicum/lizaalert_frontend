import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { TextWithIcon } from '../../molecules/text-with-icon';
import styles from './test-preview.module.scss';
import { TextPreviewProps } from './types';

/**
 * @description Компонент превью теста
 *
 * @props
 * - test - obj, required - объект теста содержит id, description, passingScore, retries, deadline, inProgress
 * - toggleRender - function, required - функция возврата к тесту
 */

function TestPreview({ test, toggleRender }: TextPreviewProps) {
  const date = new Date(test.deadline);

  return (
    <Card htmlTag="section" className={styles.container}>
      <div className={styles.propertiesRow}>
        <Heading level={2} size="l" title="Тест" />
        {test.inProgress && (
          <Button view="text" onClick={toggleRender} text="Вернуться к тесту" />
        )}
      </div>
      <p className={styles.paragraph}>{test.description}</p>
      <ul className={styles.properties}>
        <li className={styles.propertiesRow}>
          <TextWithIcon iconType="check" text="Проходной балл:" />
          <p className={styles.paragraph}>{`${test.passingScore}%`}</p>
        </li>
        <li className={styles.propertiesRow}>
          <TextWithIcon iconType="retry" text="Количество попыток:" />
          <p className={styles.paragraph}>{test.retries}</p>
        </li>
        <li className={styles.propertiesRow}>
          <TextWithIcon iconType="time" text="Срок сдачи:" />
          <time className={styles.paragraph}>{date.toLocaleString()}</time>
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
