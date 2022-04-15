import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../../atoms';

import styles from './input.module.scss';

/**
 * @description Компонент инпут с основной стилизацией (активное и неактивное состояние).
 *
 * - labelName - string - заголовок инпута, необязательный prop, не должен быть пустой строкой
 * - inputName - string - имя инпута и id
 * - type - string - тип инпута
 * - value - string - значение инпута
 * - accept - string - необязательный prop, в котором указаны возможные форматы файла
 * - placeholder - string - текст подсказки поля ввода
 * - error - string - текст ошибки валидации, необязательный prop
 * - disabled - bool - контроль возможности изменения инпута
 * - onChange - func - обработчик изменения значения инпута
 * - className - string - css-класс для стилизации компонента родителя (div)
 */

function Input({
  labelName,
  inputName,
  type,
  value,
  accept,
  placeholder,
  error,
  disabled,
  onChange,
  className,
}) {
  return (
    <div className={classNames(styles.container, className)}>
      <label
        htmlFor={inputName}
        className={classNames({
          [styles.label]: labelName,
          [styles.label_flex]: type === 'file',
        })}
      >
        {labelName}
        {labelName && type === 'file' ? (
          <Icon type="attachment" className={styles.icon} />
        ) : (
          labelName &&
          type !== 'tel' && <Icon type="edit" className={styles.icon} />
        )}
      </label>
      <input
        id={inputName}
        name={inputName}
        type={type}
        value={value}
        accept={accept}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={classNames(styles.input, {
          [styles.input_hidden]: type === 'file',
          [styles.input_warned]: error,
        })}
      />
      {type === 'file' && <span className={styles.input}>{value}</span>}
      {/* когда будет настроена валидация, будет условие isValid, вместо error */}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

Input.defaultProps = {
  labelName: null,
  accept: null,
  error: null,
  disabled: false,
};

Input.propTypes = {
  labelName: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'file', 'tel', 'email', 'password'])
    .isRequired,
  value: PropTypes.string.isRequired,
  accept: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
