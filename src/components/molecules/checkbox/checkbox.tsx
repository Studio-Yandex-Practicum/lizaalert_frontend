import { InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { Controls } from 'utils/constants';
import styles from './checkbox.module.scss';
import { CheckboxProps } from './types';

/**
 * Компонент контролируемого чекбокса или радио с текстом-лейблом.
 */

function Checkbox({
  isRadio = false,
  labelText = '',
  className = '',
  name = '',
  value = '',
  ...props
}: CheckboxProps & InputHTMLAttributes<HTMLInputElement>) {
  const checkboxId = `${Controls.CHECKBOX}-${name}-${value.toString()}`;

  return (
    <label
      className={classnames(styles.checkbox, className)}
      htmlFor={checkboxId}
    >
      <input
        {...props}
        id={checkboxId}
        className={styles.input}
        type={isRadio ? Controls.RADIO : Controls.CHECKBOX}
        name={name}
        value={value}
      />
      <Icon className={styles.pseudo} type={isRadio ? 'radio' : 'checkbox'} />
      <p className={styles.labelText}>{labelText}</p>
    </label>
  );
}

export default Checkbox;
