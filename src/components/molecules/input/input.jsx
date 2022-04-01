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
 */

function Input({ labelName, type, inputName, value, onChange }) {
  const inputRef = React.useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div className={styles.container}>
      <label htmlFor={inputName} className={styles.label}>
        {labelName}
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
      />
      {type === 'file' ? (
        <>
          <span className={styles.input}>{value}</span>
          <Icon type="attachment" className={styles.icon} />
        </>
      ) : (
        type !== 'tel' && (
          <Icon type="edit" className={styles.icon} onClick={() => focus()} />
        )
      )}
    </div>
  );
}

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'file', 'tel', 'email', 'password'])
    .isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
