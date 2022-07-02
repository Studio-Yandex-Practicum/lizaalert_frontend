import classNames from 'classnames';
import TextWithIcon from '../text-with-icon/text-with-icon';
import styles from './test-results.module.scss';

type AnswerType = {
  id: number;
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
};

type TestResultProps = {
  answer: AnswerType;
  className?: string;
};

const defaultProps = {
  className: '',
};

/**
 * @description Компонент результата ответов теста.
 *
 * - answer - obj - объект ответа, содержит id, text, isChecked, isCorrect
 * - className - string - css-класс для стилизации текста компонента TextWithIcon
 */

const CORRECT_SELECTED_ANSWER = 'checkSolid';
const CORRECT_UNSELECTED_ANSWER = 'check';
const INCORRECT_SELECTED_ANSWER = 'xSolid';
const INCORRECT_UNSELECTED_ANSWER = 'xSmall';

function TestResult({ answer, className }: TestResultProps) {
  function handleIconType() {
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

  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      iconType={handleIconType()}
      className={classNames(className, styles.text, {
        [styles.text__success]: answer.isCorrect && answer.isChecked,
        [styles.text__notChecked_right]: answer.isCorrect && !answer.isChecked,
        [styles.text__notChecked_warning]:
          !answer.isCorrect && !answer.isChecked,
        [styles.text__warning]: !answer.isCorrect && answer.isChecked,
      })}
    />
  );
}

TestResult.defaultProps = defaultProps;

export default TestResult;
