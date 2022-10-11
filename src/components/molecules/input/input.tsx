import { InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './input.module.scss';
import { InputProps } from './types';

/**
 * Компонент-инпут с основной стилизацией.
 */

function Input({
  labelName = null,
  isWithIcon = false,
  iconType = 'edit',
  type,
  error = null,
  className = '',
  isValid = true,
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
              [styles.input_warned]: !isValid,
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
      <span className={styles.error}>{!isValid ? error : ''}</span>
    </div>
  );
}

export default Input;
