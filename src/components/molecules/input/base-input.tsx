import type { FC } from 'react';
import classnames from 'classnames';
import styles from './input.module.scss';
import type { BaseInputProps } from './types';

export const BaseInput: FC<BaseInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  isValid,
  disabled,
  ...props
}) => (
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
