import { ChangeEvent } from 'react';
import classnames from 'classnames';
import { Icon, IconType } from '../../atoms';
import styles from './input.module.scss';

type InputType = 'text' | 'date' | 'file' | 'tel' | 'email' | 'password';

type InputProps = {
  labelName?: string;
  inputName: string;
  isWithIcon?: boolean;
  iconType?: IconType;
  type: InputType;
  value: string;
  accept?: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  max?: string;
  min?: string;
  pattern?: string;
  message?: string;
};

const defaultProps = {
  labelName: null,
  isWithIcon: false,
  iconType: 'edit',
  accept: null,
  error: null,
  disabled: false,
  minLength: null,
  maxLength: null,
  required: false,
  max: null,
  min: null,
  className: '',
  pattern: null,
  message: '',
};

/**
 * @description Компонент инпут с основной стилизацией (активное и неактивное состояние).
 *
 * - labelName - string - заголовок инпута
 * - inputName - string, required - имя инпута и id
 * - isWithIcon - boolean - пропс, по умолчанию false, определяет есть ли иконка у инпута
 * - iconType - enum(IconType) - тип иконки из объекта иконок, по умолчанию `'edit'`. При типе инпута `file` ставится иконка скрепки.
 * - type - enum('text' | 'date' | 'file' | 'tel' | 'email' | 'password'), required - тип инпута
 * - value - string, required - значение инпута
 * - accept - string - возможные форматы файла
 * - placeholder - string, required - текст подсказки поля ввода
 * - error - string - текст ошибки валидации
 * - disabled - boolean - контроль возможности изменения инпута
 * - onChange - function, required - обработчик изменения значения инпута
 * - className - string - css-класс для стилизации компонента родителя (div)
 * - minLength - number - минимальная длина значения текстового инпута
 * - maxLength - number - максимальная длина значения текстового инпута
 * - required - boolean - обязательность заполнения инпута
 * - max - number - максимальное значение числового инпута
 * - min - number - минимальное значение числового инпута
 * - pattern - string - регулярное выражение для валидации
 * - message - string - кастомный текст ошибки
 */

function Input({
  labelName,
  inputName,
  isWithIcon,
  iconType = 'edit',
  type,
  value,
  accept,
  placeholder,
  error,
  disabled,
  onChange,
  className,
  minLength,
  maxLength,
  required,
  max,
  min,
  pattern,
  message,
}: InputProps) {
  return (
    <div className={classnames(styles.container, className)}>
      <label htmlFor={inputName} className={styles.label}>
        {labelName && <span className={styles.labelText}>{labelName}</span>}

        <div className={styles.inputContainer}>
          {isWithIcon && (
            <Icon
              type={type === 'file' ? 'attachment' : iconType}
              className={styles.icon}
            />
          )}

          <input
            id={inputName}
            name={inputName}
            type={type}
            value={value}
            accept={accept}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            className={classnames(styles.input, {
              [styles.input_hidden]: type === 'file',
              [styles.input_warned]: error,
            })}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            max={max}
            min={min}
            pattern={pattern}
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

Input.defaultProps = defaultProps;

export default Input;
