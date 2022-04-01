import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './checkbox.module.scss';

/**
 * @description Компонент чекбокса или радио с текстом-лейблом.
 *
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
}) {
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
      <Icon
        className={isRadio ? styles.pseudoRadio : styles.pseudoCheckbox}
        type={isRadio ? 'radio' : 'checkbox'}
      />
      <p className={styles.labelText}>{labelText}</p>
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isRadio: PropTypes.bool,
  checked: PropTypes.bool,
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  isRadio: false,
  checked: false,
  labelText: '',
  className: '',
};

export default Checkbox;
