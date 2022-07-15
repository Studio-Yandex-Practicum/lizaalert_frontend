import { KeyboardEvent, useState } from 'react';
import classnames from 'classnames';
import { Option } from '../../atoms/option';
import styles from './select.module.scss';
import { SelectProps } from './types';

const DUMMY_OPTIONS = [
  { id: 1, name: 'Кинологическое' },
  { id: 2, name: 'Оперативное' },
  { id: 3, name: 'Первая помощь' },
];

/**
 * @description Компонент стилизованного селекта.
 *
 * @props
 * - className - string - css-класс миксин для описания внешней геометрии.
 * - selectName - string, required - имя селекта.
 * - inputName - string, required - имя лейбла.
 * - placeholder - string, required - плейсхолдер для селекта.
 * - options - array of { id: string, name: string }, required - массив объектов опции, name -- текст опции
 * - setSelectedValue - function, required - обработчик выбора опции
 * - selectedValue - string - текст выбранной опции по умолчанию
 * */

function Select({
  className = '',
  selectName,
  inputName,
  placeholder,
  options = DUMMY_OPTIONS,
  setSelectedValue,
  selectedValue = '',
}: SelectProps) {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions((prevValue) => !prevValue);
  };

  const handleEscDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setShowOptions(false);
    }
  };

  const handleSetValue = (value: string) => {
    setSelectedValue(selectName, value);
    setShowOptions(false);
  };

  return (
    <div className={classnames(styles.container, className)}>
      <label htmlFor={selectName} className={styles.label}>
        {inputName}
      </label>
      <div className={styles.selectContainer}>
        <div
          className={styles.select}
          id={selectName}
          placeholder={placeholder}
          onClick={handleShowOptions}
          role="listbox"
          onKeyDown={handleEscDown}
          tabIndex={0}
        >
          {selectedValue || placeholder}
        </div>
        {showOptions && (
          <ul className={styles.list}>
            {options.map((option) => (
              <Option
                key={option.id}
                option={option}
                onClick={handleSetValue}
                onKeyDown={handleEscDown}
                className={styles.listItem}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Select;
