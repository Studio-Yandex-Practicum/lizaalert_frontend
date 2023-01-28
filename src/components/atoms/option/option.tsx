import type { KeyboardEvent } from 'react';
import classnames from 'classnames';
import { KeyboardKeys } from 'utils/constants';
import styles from './option.module.scss';
import type { OptionProps } from './types';

/**
 * Интерактивный компонент-опция для списков, селектов.
 * Выполнен тегом `li`.
 */

function Option({ option, onClick, onKeyDown, className = '' }: OptionProps) {
  const onOptionClick = () => {
    onClick(option);
  };

  const onOptionKeyDown = (evt: KeyboardEvent<HTMLLIElement>) => {
    if (evt.key === KeyboardKeys.ESCAPE) {
      onOptionClick();
    }
    onKeyDown(evt);
  };

  return (
    <li
      className={classnames(styles.option, className)}
      onClick={onOptionClick}
      onKeyDown={onOptionKeyDown}
      aria-selected
      value={option.name}
      role="option"
      tabIndex={0}
    >
      {option.name}
    </li>
  );
}

export default Option;
