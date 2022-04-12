import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import styles from './test-preview.module.scss';
import { Button, TextWithIcon } from '../../molecules';
import Card from '../../templates/card/card';

function TestPreview({ test, toggleRender }) {
  const date = new Date(test.deadline);

  return (
    <Card htmlTag="article" className={styles.container}>
      <div className={styles.propertiesRow}>
        <Heading level={1} size="l" title="Тест" />
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

TestPreview.propTypes = {
  test: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    passingScore: PropTypes.number.isRequired,
    retries: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    inProgress: PropTypes.bool.isRequired,
  }).isRequired,
  toggleRender: PropTypes.func.isRequired,
};

export default TestPreview;
