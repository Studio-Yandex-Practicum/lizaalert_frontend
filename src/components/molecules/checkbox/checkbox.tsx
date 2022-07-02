import { ChangeEvent } from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './checkbox.module.scss';

export type CheckboxProps = {
  name: string;
  value: string;
  isRadio?: boolean;
  checked?: boolean;
  labelText?: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const defaultProps = {
  isRadio: false,
  checked: false,
  labelText: '',
  className: '',
};

/**
 * @description Компонент контролируемого чекбокса или радио с текстом-лейблом.
 *
 * @props
 * - name - string, required - имя группы чекбоксов/радио
 * - value - string, required - значение чекбокса
 * - isRadio - boolean - флаг, является ли компонент радио-инпутом
 * - checked - boolean - флаг, отмечен ли чекбокс по-умолчанию (при загрузке)
 * - labelText - string - текст лейбла, всегда справа
 * - onChange - function, required - функция-коллбек события изменения значения чекбокса
 * - className - string - класс-миксин
 */

function Checkbox({
  name,
  value,
  isRadio,
  checked,
  labelText,
  onChange,
  className,
}: CheckboxProps) {
  const checkboxId = `checkbox-${name}-${value}`;

  return (
    <label
      className={classnames(styles.checkbox, className)}
      htmlFor={checkboxId}
    >
      <input
        id={checkboxId}
        className={styles.input}
        type={isRadio ? 'radio' : 'checkbox'}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Icon className={styles.pseudo} type={isRadio ? 'radio' : 'checkbox'} />
      <p className={styles.labelText}>{labelText}</p>
    </label>
  );
}

Checkbox.defaultProps = defaultProps;

export default Checkbox;
