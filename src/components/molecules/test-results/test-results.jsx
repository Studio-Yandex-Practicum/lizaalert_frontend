import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { TextWithIcon } from '..';

import styles from './test-results.module.scss';

/**
 * @description Компонент результата ответов теста.
 *
 * - answer - obj - объект ответа, содержит id, text, isChecked, isCorrect
 * - className - string - css-класс для стилизации текста компонента TextWithIcon
 */

function TestResult({ answer, className }) {
  function handleIconType() {
    const icon = {
      iconType: '',
    };

    if (answer.isCorrect && answer.isChecked) {
      // eslint-disable-next-line no-return-assign
      return (icon.iconType = 'checkSolid');
    }
    if (answer.isCorrect && !answer.isChecked) {
      // eslint-disable-next-line no-return-assign
      return (icon.iconType = 'check');
    }
    if (!answer.isCorrect && answer.isChecked) {
      // eslint-disable-next-line no-return-assign
      return (icon.iconType = 'xSolid');
    }
    // eslint-disable-next-line no-return-assign
    return (icon.iconType = 'xSmall');
  }

  return (
    <TextWithIcon
      key={answer.id}
      text={answer.text}
      color=""
      iconType={handleIconType(answer)}
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
