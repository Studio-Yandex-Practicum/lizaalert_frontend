import { InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms/icon';
import styles from './checkbox.module.scss';
import { CheckboxProps } from './types';
import { Controls } from '../../../utils/constants';

/**
 * @description Компонент контролируемого чекбокса или радио с текстом-лейблом.
 *
 * @props
 * - name - string, required - имя инпута.
 * - isRadio - boolean - флаг, является ли компонент радио-инпутом.
 * - labelText - string - текст лейбла, всегда справа.
 * - className - string - класс-миксин.
 * - стандартные атрибуты HTML для `<input>`.
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
