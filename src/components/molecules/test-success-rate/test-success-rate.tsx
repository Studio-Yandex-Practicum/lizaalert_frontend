import { Children } from 'react';
import classnames from 'classnames';
import { Heading } from '../../atoms';
import styles from './test-success-rate.module.scss';

type TestSuccessRateProps = {
  testResultPercent: number;
  isSuccess: boolean;
  className?: string;
};

const defaultProps = {
  className: '',
};

const testResultsTexts = {
  success: [
    'Отличный результат!',
    'Нажмите «Далее» чтобы продолжить.',
    'Если считаете, что сможете лучше, нажмите «Пересдать». В случае если результат будет хуже, засчитается наивысший результат.',
  ],
  failure: [
    'К сожалению, вы не набрали проходной результат.',
    'Нажмите «Пересдать», чтобы попробовать снова.',
  ],
};

/**
 * @description Компонент, показывающий результат прохождения теста
 *
 * @props
 * - testResultPercent - number - результат прохождения теста
 * - isSuccess - boolean - флаг того, что тест пройден успешно
 * - className - string - класс-миксин для стилизации контейнера
 * */

function TestSuccessRate({
  isSuccess,
  testResultPercent,
  className,
}: TestSuccessRateProps) {
  const texts = isSuccess ? testResultsTexts.success : testResultsTexts.failure;

  return (
    <div
      className={classnames(
        styles.result,
        isSuccess ? styles.result_type_good : styles.result_type_bad,
        className
      )}
    >
      <Heading
        level={3}
        title={`${testResultPercent}%`}
        size="xxl"
        className={classnames(
          styles.percent,
          isSuccess ? styles.green : styles.red
        )}
      />
      <div className={styles.result__description}>
        {Children.toArray(
          texts.map((text) => (
            <p
              className={classnames(
                styles.description__text,
                isSuccess ? styles.green : styles.red
              )}
            >
              {text}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

TestSuccessRate.defaultProps = defaultProps;

export default TestSuccessRate;
