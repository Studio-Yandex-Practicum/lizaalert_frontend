import classnames from 'classnames';
import { IconType } from 'components/atoms/icon';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { TestAnswerType } from 'components/molecules/test-answer';
import styles from './test-results.module.scss';
import { TestResultsProps } from './types';

const CORRECT_SELECTED_ANSWER = 'checkSolid';
const CORRECT_UNSELECTED_ANSWER = 'check';
const INCORRECT_SELECTED_ANSWER = 'xSolid';
const INCORRECT_UNSELECTED_ANSWER = 'xSmall';

function handleIconType(answer: TestAnswerType): IconType {
  if (answer.isCorrect && answer.isChecked) {
    return CORRECT_SELECTED_ANSWER;
  }
  if (answer.isCorrect && !answer.isChecked) {
    return CORRECT_UNSELECTED_ANSWER;
  }
  if (!answer.isCorrect && answer.isChecked) {
    return INCORRECT_SELECTED_ANSWER;
  }
  return INCORRECT_UNSELECTED_ANSWER;
}

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

function TestResults({ answer, className = '' }: TestResultsProps) {
  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      iconType={handleIconType(answer)}
      className={classnames(className, styles.text, {
        [styles.text__success]: answer.isCorrect && answer.isChecked,
        [styles.text__warning]: !answer.isCorrect && answer.isChecked,
      })}
    />
  );
}

export default TestResults;
