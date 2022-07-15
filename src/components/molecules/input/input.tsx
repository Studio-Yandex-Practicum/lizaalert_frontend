import { InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms/icon';
import styles from './input.module.scss';
import { InputProps } from './types';

/**
 * @description Компонент инпут с основной стилизацией (активное и неактивное состояние).
 *
 * - type - enum('text' | 'date' | 'file' | 'tel' | 'email' | 'password'), required - тип инпута.
 * - name - string, required - имя инпута.
 * - labelName - string - лейбл инпута.
 * - isWithIcon - boolean - пропс, по умолчанию false, определяет есть ли иконка у инпута.
 * - iconType - enum(IconType) - тип иконки из объекта иконок, по умолчанию `'edit'`. При типе инпута `file` ставится иконка скрепки.
 * - error - string - текст ошибки валидации.
 * - className - string - css-класс для стилизации компонента родителя (div).
 * - message - string - кастомный текст ошибки.
 * - стандартные атрибуты HTML для `<input>`.
 */

function Input({
  labelName = null,
  isWithIcon = false,
  iconType = 'edit',
  type,
  error = null,
  className = '',
  message = '',
  name,
  value,
  placeholder,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={classnames(styles.container, className)}>
      <label htmlFor={name} className={styles.label}>
        {labelName && <span className={styles.labelText}>{labelName}</span>}

        <div className={styles.inputContainer}>
          {isWithIcon && (
            <Icon
              type={type === 'file' ? 'attachment' : iconType}
              className={styles.icon}
            />
          )}

          <input
            {...props}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            className={classnames(styles.input, {
              [styles.input_hidden]: type === 'file',
              [styles.input_warned]: error,
            })}
            type={type}
          />

          {type === 'file' && (
            <span
              className={classnames(styles.input, styles.input_type_file, {
                [styles.placeholder]: !value,
              })}
            >
              {value || placeholder}
            </span>
          )}
        </div>
      </label>
      {/* когда будет настроена валидация, будет условие isValid, вместо error */}
      <span className={styles.error}>
        {error && message ? message : error || ''}
      </span>
    </div>
  );
}

export default Input;
