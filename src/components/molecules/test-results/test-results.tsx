import classnames from 'classnames';
import { TextWithIcon } from '../text-with-icon';
import { TestResultsProps } from './types';
import { AnswerType } from '../test-answer';
import { IconType } from '../../atoms/icon';
import styles from './test-results.module.scss';

const CORRECT_SELECTED_ANSWER = 'checkSolid';
const CORRECT_UNSELECTED_ANSWER = 'check';
const INCORRECT_SELECTED_ANSWER = 'xSolid';
const INCORRECT_UNSELECTED_ANSWER = 'xSmall';

function handleIconType(answer: AnswerType): IconType {
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
 * @description Компонент результата ответов теста.
 *
 * - answer - obj, required - объект ответа, содержит id, text, isChecked, isCorrect.
 * - className - string - css-класс для стилизации текста компонента TextWithIcon.
 */

function TestResults({ answer, className = '' }: TestResultsProps) {
  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      iconType={handleIconType(answer)}
      className={classnames(className, styles.text, {
        [styles.text__success]: answer.isCorrect && answer.isChecked,
        [styles.text__notChecked_right]: answer.isCorrect && !answer.isChecked,
        [styles.text__notChecked_warning]:
          !answer.isCorrect && !answer.isChecked,
        [styles.text__warning]: !answer.isCorrect && answer.isChecked,
      })}
    />
  );
}

export default TestResults;
