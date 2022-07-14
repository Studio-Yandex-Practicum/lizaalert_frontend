import { ChangeEvent } from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './input.module.scss';

type InputType = 'text' | 'date' | 'file' | 'tel' | 'email' | 'password';

type InputProps = {
  labelName?: string;
  inputName: string;
  isWithIcon?: boolean;
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
 * - labelName - string - заголовок инпута, необязательный prop, не должен быть пустой строкой
 * - inputName - string - имя инпута и id
 * - type - string - тип инпута
 * - isWithIcon - bool - пропс, по умолчанию false, определяет есть ли иконка у инпута
 * - value - string - значение инпута
 * - accept - string - необязательный prop, в котором указаны возможные форматы файла
 * - placeholder - string - текст подсказки поля ввода
 * - error - string - текст ошибки валидации, необязательный prop
 * - disabled - bool - контроль возможности изменения инпута
 * - onChange - func - обработчик изменения значения инпута
 * - className - string - css-класс для стилизации компонента родителя (div)
 * - message - string - кастомный текст ошибки, необязательный prop
 */

function Input({
  labelName,
  inputName,
  isWithIcon,
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
        <span className={styles.labelText}>{labelName}</span>

        <div className={styles.inputContainer}>
          {isWithIcon && type === 'file' ? (
            <Icon type="attachment" className={styles.icon} />
          ) : (
            isWithIcon && <Icon type="edit" className={styles.icon} />
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
            <span className={classnames(styles.input, styles.input_type_file)}>
              {value}
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
