import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './input.module.scss';

import { Icon } from '../../atoms';

/**
 * @description Компонент инпут с основной стилизацией (активное и неактивное состояние).
 *
 * - labelName - string - заголовок инпута
 * - type - string - тип инпута
 * - inputName - string - имя инпута и id
 * - value - string - значение инпута
 * - onChange - func - обработчик изменения значения инпута
 * - accept - string - необязательный prop, в котором указаны возможные форматы файла
 */

function Input({ labelName, type, inputName, value, onChange, accept }) {
  const inputRef = React.useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div className={styles.container}>
      <label
        htmlFor={inputName}
        className={classNames(styles.label, {
          [styles.label_flex]: type === 'file',
        })}
      >
        {labelName}
        {type === 'file' ? (
          <Icon type="attachment" className={styles.icon} />
        ) : (
          type !== 'tel' && (
            <Icon type="edit" className={styles.icon} onClick={() => focus()} />
          )
        )}
      </label>
      <input
        id={inputName}
        type={type}
        name={inputName}
        value={value}
        ref={inputRef}
        onChange={onChange}
        disabled={type === 'tel'}
        className={classNames(styles.input, {
          [styles.input_hidden]: type === 'file',
        })}
        accept={accept}
      />
      {type === 'file' && <span className={styles.input}>{value}</span>}
    </div>
  );
}

Input.defaultProps = {
  accept: null,
};

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'file', 'tel', 'email', 'password'])
    .isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
};

export default Input;
