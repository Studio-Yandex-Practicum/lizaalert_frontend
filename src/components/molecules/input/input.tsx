import type { FC } from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './input.module.scss';
import type { InputProps } from './types';

/**
 * Компонент-инпут с основной стилизацией. Может отображать текст ошибки.
 * Также в качестве props принимает все стандартные HTML-атрибуты для инпута.
 */

export const Input: FC<InputProps> = ({
  labelName = null,
  isWithIcon = false,
  iconType = 'edit',
  type,
  error = null,
  className,
  isValid = true,
  name,
  value,
  placeholder,
  disabled,
  mask,
  onChange,
  ...props
}) => {
  const renderInput = (): JSX.Element => (
    <input
      {...props}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classnames(styles.input, {
        [styles.input_hidden]: type === 'file',
        [styles.input_warned]: !isValid && !disabled,
      })}
      disabled={disabled}
      type={type}
    />
  );

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

          {mask ? (
            <InputMask mask={mask} onChange={onChange} value={value}>
              {renderInput()}
            </InputMask>
          ) : (
            renderInput()
          )}

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
      <span className={styles.error}>{!isValid && !disabled ? error : ''}</span>
    </div>
  );
};
