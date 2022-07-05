import { Card, Heading } from '../../atoms';
import { Button, TextWithIcon } from '../../molecules';
import styles from './test-preview.module.scss';

type TestType = {
  id: number;
  description: string;
  passingScore: number;
  retries: number;
  deadline: string;
  inProgress: boolean;
};

type TextPreviewProps = {
  test: TestType;
  toggleRender: (...args: unknown[]) => void;
};

/**
 * @description Компонент превью теста
 *
 * @props
 * test - obj - объект тест содержит id, description, passingScore, retries, deadline, inProgress
 * toggleRender - function - функция возврата к тесту
 */

function TestPreview({ test, toggleRender }: TextPreviewProps) {
  const date = new Date(test.deadline);

  return (
    <Card htmlTag="article" className={styles.container}>
      <div className={styles.propertiesRow}>
        <Heading level={2} size="l" title="Тест" />
        {test.inProgress && (
          <Button view="text" onClick={toggleRender}>
            Вернуться к тесту
          </Button>
        )}
      </div>
      <p className={styles.paragraph}>{test.description}</p>
      <div className={styles.properties}>
        <div className={styles.propertiesRow}>
          <TextWithIcon iconType="check" text="Проходной балл:" />
          <p className={styles.paragraph}>{`${test.passingScore}%`}</p>
        </div>
        <div className={styles.propertiesRow}>
          <TextWithIcon iconType="retry" text="Количество попыток:" />
          <p className={styles.paragraph}>{test.retries}</p>
        </div>
        <div className={styles.propertiesRow}>
          <TextWithIcon iconType="time" text="Срок сдачи:" />
          <time className={styles.paragraph}>{date.toLocaleString()}</time>
        </div>
      </div>
      {!test.inProgress && (
        <Button className={styles.button} onClick={toggleRender}>
          Начать тест
        </Button>
      )}
    </Card>
  );
}

export default TestPreview;
