import type { FC } from 'react';
import classnames from 'classnames';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { TestAnswerIcons, TestAnswerStatus } from 'utils/constants';
import styles from './test-results.module.scss';
import type { ResultType, TestResultsProps } from './types';

const defaultResult: ResultType = {
  resultIcon: TestAnswerIcons.IncorrectUnselected,
};

const resultMap: Record<TestAnswerStatus, ResultType> = {
  [TestAnswerStatus.Correct]: {
    resultClassName: styles.textSuccess,
    resultIcon: TestAnswerIcons.CorrectSelected,
  },
  [TestAnswerStatus.Incorrect]: {
    resultClassName: styles.textWarning,
    resultIcon: TestAnswerIcons.IncorrectSelected,
  },
  [TestAnswerStatus.Unanswered]: {
    resultIcon: TestAnswerIcons.CorrectUnselected,
  },
};

/**
 * Компонент результата ответов теста.
 * Представляет собой текст с иконкой. Цвет текста и иконка различаются в зависимости от входных данных по ответу.
 * Реализует состояния:
 *
 * - правильный выбранный ответ
 * - неправильный выбранный ответ
 * - правильный, но не выбранный ответ
 * - неправильный и не выбранный ответ
 */

export const TestResults: FC<TestResultsProps> = ({
  answer,
  validatedAnswers,
}) => {
  const statusData = resultMap[validatedAnswers[answer.id]] || defaultResult;
  const { resultClassName, resultIcon } = statusData;

  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      iconType={resultIcon}
      className={classnames(styles.text, resultClassName)}
    />
  );
};
