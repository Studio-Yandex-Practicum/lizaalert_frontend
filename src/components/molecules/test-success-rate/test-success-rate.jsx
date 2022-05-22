import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import styles from './test-success-rate.module.scss';

function TestSuccessRate({ isSuccess, testResultPercent }) {
  if (isSuccess)
    return (
      <div className={styles.good__result}>
        <Heading
          level={3}
          title={`${testResultPercent}%`}
          size="xxl"
          className={`${styles.percent} ${styles.green}`}
        />
        <div className={styles.result__description}>
          <Heading
            title="Отличный результат!"
            isSubheading
            size="m"
            className={`${styles.description__title} ${styles.green}`}
          />
          <Heading
            title="Нажите «Далее» чтобы продолжить."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.green}`}
          />
          <Heading
            title="Если считаете, что сможете лучше, нажмите «Пересдать». В случае если результат будет хуже, засчитается наивысший результат."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.green}`}
          />
        </div>
      </div>
    );

  if (!isSuccess)
    return (
      <div className={styles.bad__result}>
        <Heading
          level={3}
          title={`${testResultPercent}%`}
          size="xxl"
          className={`${styles.percent} ${styles.red}`}
        />
        <div className={styles.result__description}>
          <Heading
            title="К сожалению, вы не набрали проходной результат."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.red}`}
          />
          <Heading
            title="Нажмите «Пересдать», чтобы попробовать снова."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.red}`}
          />
        </div>
      </div>
    );
}

TestSuccessRate.propTypes = {
  testResultPercent: PropTypes.number.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default TestSuccessRate;
