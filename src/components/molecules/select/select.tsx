import { KeyboardEvent, useState } from 'react';
import classnames from 'classnames';
import { Option, OptionType } from 'components/atoms/option';
import styles from './select.module.scss';
import { SelectProps } from './types';
import { Icon } from '../../atoms/icon';

const DUMMY_OPTIONS = [
  { id: 1, name: 'Кинологическое' },
  { id: 2, name: 'Оперативное' },
  { id: 3, name: 'Первая помощь' },
];

/**
 * Компонент стилизованного селекта.
 *
 * @props
 * - className - string - css-класс миксин для описания внешней геометрии.
 * - name - string, required - имя селекта.
 * - label - string, required - имя лейбла.
 * - placeholder - string, required - плейсхолдер для селекта.
 * - options - array of { id: string, name: string }, required - массив объектов опции, name -- текст опции
 * - onSelect - function, required - обработчик выбора опции
 * - selectedValue - string - текст выбранной опции по умолчанию
 * */

function Select({
  className = '',
  name,
  label,
  placeholder,
  options = DUMMY_OPTIONS,
  onSelect,
  initialOption,
}: SelectProps) {
  const [isShowed, setIsShowed] = useState(false);
  const [currentOption, setCurrentOption] = useState<OptionType | null>(
    initialOption ?? null
  );

  const handleSelect = () => {
    setIsShowed((prevValue) => !prevValue);
  };

  const handleEscDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setIsShowed(false);
    }
  };

  const handleSetValue = (option: OptionType) => {
    setCurrentOption(option);
    onSelect(name, option);
    setIsShowed(false);
  };

  return (
    <div className={classnames(styles.container, className)}>
      {label && (
        // Лейбл не фокусируется, клик - имитация работы обычного лейбла для инпута
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <label htmlFor={name} className={styles.label} onClick={handleSelect}>
          {label}
        </label>
      )}
      <div className={styles.selectContainer}>
        <button
          type="button"
          className={classnames(styles.select, {
            [styles.select_opened]: isShowed,
          })}
          id={name}
          name={name}
          onClick={handleSelect}
          role="listbox"
          onKeyDown={handleEscDown}
        >
          {currentOption?.name || (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
          <Icon type="arrowDown" className={styles.arrow} />
        </button>
        {isShowed && (
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
