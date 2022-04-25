import classNames from 'classnames';
import PropTypes from 'prop-types';
import TextWithIcon from '../text-with-icon/text-with-icon';
import styles from './test-results.module.scss';

/**
 * @description Компонент результата ответов теста.
 *
 * - answer - obj - объект ответа, содержит id, text, isChecked, isCorrect
 * - className - string - css-класс для стилизации текста компонента TextWithIcon
 */

function TestResult({ answer, className }) {
  const CORRECT_SELECTED_ANSWER = 'checkSolid';
  const CORRECT_UNSELECTED_ANSWER = 'check';
  const INCORRECT_SELECTED_ANSWER = 'xSolid';
  const INCORRECT_UNSELECTED_ANSWER = 'xSmall';

  function handleIconType() {
    if (answer.isCorrect && answer.isChecked) {
      // eslint-disable-next-line no-return-assign
      return CORRECT_SELECTED_ANSWER;
    }
    if (answer.isCorrect && !answer.isChecked) {
      // eslint-disable-next-line no-return-assign
      return CORRECT_UNSELECTED_ANSWER;
    }
    if (!answer.isCorrect && answer.isChecked) {
      // eslint-disable-next-line no-return-assign
      return INCORRECT_SELECTED_ANSWER;
    }
    // eslint-disable-next-line no-return-assign
    return INCORRECT_UNSELECTED_ANSWER;
  }

  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      color=""
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

TestResult.defaultProps = {
  className: '',
};

TestResult.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default TestResult;
