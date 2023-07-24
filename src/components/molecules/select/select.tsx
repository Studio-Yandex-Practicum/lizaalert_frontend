import { FC, KeyboardEvent, useState } from 'react';
import classnames from 'classnames';
import { Option, OptionType } from 'components/atoms/option';
import { Icon } from 'components/atoms/icon';
import { KeyboardKeys } from 'utils/constants';
import styles from './select.module.scss';
import type { SelectProps } from './types';

/**
 * Компонент стилизованного селекта. При нажатии выпадает список опций.
 * */

export const Select: FC<SelectProps> = ({
  className,
  name,
  label,
  placeholder,
  options,
  onSelect,
  initialOption,
}) => {
  const [isShowed, setIsShowed] = useState(false);
  const [currentOption, setCurrentOption] = useState<OptionType | null>(
    initialOption ?? null
  );

  const handleSelect = () => {
    setIsShowed((prevValue) => !prevValue);
  };

  const handleEscDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === KeyboardKeys.ESCAPE) {
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
        <label htmlFor={name} className={styles.label}>
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
};
