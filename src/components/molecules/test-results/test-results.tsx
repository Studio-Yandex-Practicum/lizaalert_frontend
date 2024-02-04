import type { FC } from 'react';
import classnames from 'classnames';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { IconType } from 'components/atoms/icon';
import styles from './test-results.module.scss';
import type { TestResultsProps } from './types';

const CORRECT_SELECTED_ANSWER = 'checkSolid';
const CORRECT_UNSELECTED_ANSWER = 'check';
const INCORRECT_SELECTED_ANSWER = 'xSolid';
const INCORRECT_UNSELECTED_ANSWER = 'xSmall';

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
  let resultClass;
  let resultIcon: IconType = INCORRECT_UNSELECTED_ANSWER;

  if (validateAnswers[answer.id] === 'correct') {
    resultClass = styles.text__success;
    resultIcon = CORRECT_SELECTED_ANSWER;
  } else if (validateAnswers[answer.id] === 'incorrect') {
    resultClass = styles.text__warning;
    resultIcon = INCORRECT_SELECTED_ANSWER;
  } else if (validateAnswers[answer.id] === 'unanswered') {
    resultIcon = CORRECT_UNSELECTED_ANSWER;
  }

  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      iconType={resultIcon}
      className={classnames(styles.text, resultClass)}
    />
  );
};
