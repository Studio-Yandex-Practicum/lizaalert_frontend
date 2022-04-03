import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../../atoms';

import styles from './input.module.scss';

/**
 * @description Компонент инпут с основной стилизацией (активное и неактивное состояние).
 *
 * - labelName - string - заголовок инпута, необязательный prop, не должен быть пустой строкой
 * - type - string - тип инпута
 * - inputName - string - имя инпута и id
 * - placeholder - string - текст подсказки поля ввода
 * - value - string - значение инпута
 * - onChange - func - обработчик изменения значения инпута
 * - accept - string - необязательный prop, в котором указаны возможные форматы файла
 * - className - string - css-класс для стилизации компонента родителя (div)
 */

function Input({
  labelName,
  type,
  inputName,
  value,
  onChange,
  accept,
  placeholder,
  className,
  disabled,
}) {
  return (
    <div className={classNames(styles.container, className)}>
      <label
        htmlFor={inputName}
        className={classNames({
          [styles.label]: labelName,
          [styles.label_flex]: type === 'file',
        })}
      >
        {labelName}
        {labelName && type === 'file' ? (
          <Icon type="attachment" className={styles.icon} />
        ) : (
          labelName &&
          type !== 'tel' && <Icon type="edit" className={styles.icon} />
        )}
      </label>
      <input
        id={inputName}
        type={type}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
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
  labelName: null,
  disabled: false,
};

Input.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.oneOf(['text', 'date', 'file', 'tel', 'email', 'password'])
    .isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Input;
