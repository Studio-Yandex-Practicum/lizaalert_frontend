import { Children } from 'react';
import classnames from 'classnames';
import { Typography } from 'components/atoms/typography';
import styles from './test-success-rate.module.scss';
import type { TestSuccessRateProps } from './types';

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
 * Компонент, показывающий результат прохождения теста.
 * Представляет собой плашку красного или зеленого цвета с заголовком и текстом.
 * */

function TestSuccessRate({
  isSuccess,
  testResultPercent = 0,
  className = '',
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
      <Typography
        htmlTag="h3"
        text={`${testResultPercent}%`}
        size="xxl"
        weight="bold"
      />

      <div className={styles.result__description}>
        {Children.toArray(
          texts.map((text) => (
            <Typography text={text} className={styles.result__text} />
          ))
        )}
      </div>
    </div>
  );
}

export default TestSuccessRate;
