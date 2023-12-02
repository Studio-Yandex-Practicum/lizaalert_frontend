import type { FC } from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { BaseInput } from './base-input';
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
  error = null,
  className,
  isValid = true,
  mask,
  ...props
}) => (
  <div className={classnames(styles.container, className)}>
    <label htmlFor={props.name} className={styles.label}>
      {labelName && <span className={styles.labelText}>{labelName}</span>}

      <div className={styles.inputContainer}>
        {isWithIcon && (
          <Icon
            type={props.type === 'file' ? 'attachment' : iconType}
            className={styles.icon}
          />
        )}

        {mask && (
          <InputMask mask={mask} onChange={props.onChange} value={props.value}>
            <BaseInput isValid={isValid} {...props} />
          </InputMask>
        )}

        {!mask && <BaseInput isValid={isValid} {...props} />}

        {props.type === 'file' && (
          <span
            className={classnames(styles.input, styles.input_type_file, {
              [styles.placeholder]: !props.value,
            })}
          >
            {props.value || props.placeholder}
          </span>
        )}
      </div>
    </label>
    <span className={styles.error}>
      {!isValid && !props.disabled ? error : ''}
    </span>
  </div>
);
