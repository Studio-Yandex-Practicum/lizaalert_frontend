import type { FC } from 'react';
import classnames from 'classnames';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { IconType } from 'components/atoms/icon';
import { AnswerIcons, AnswerStatus } from 'utils/constants';
import styles from './test-results.module.scss';
import type { TestResultsProps } from './types';

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
  validateAnswers,
}) => {
  const defaultResult: { resultClass?: string; resultIcon: IconType } = {
    resultIcon: AnswerIcons.INCORRECT_UNSELECTED_ANSWER,
  };

  const resultMap: Record<
    AnswerStatus,
    { resultClass?: string; resultIcon: IconType }
  > = {
    [AnswerStatus.CORRECT]: {
      resultClass: styles.text__success,
      resultIcon: AnswerIcons.CORRECT_SELECTED_ANSWER,
    },
    [AnswerStatus.INCORRECT]: {
      resultClass: styles.text__warning,
      resultIcon: AnswerIcons.INCORRECT_SELECTED_ANSWER,
    },
    [AnswerStatus.UNANSWERED]: {
      resultIcon: AnswerIcons.CORRECT_UNSELECTED_ANSWER,
    },
  };

  const statusData = resultMap[validateAnswers[answer.id]] || defaultResult;
  const { resultClass, resultIcon } = statusData;

  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      iconType={resultIcon}
      className={classnames(styles.text, resultClass)}
    />
  );
};
