import { KeyboardEvent } from 'react';
import classnames from 'classnames';
import styles from './option.module.scss';

type OptionType = {
  id: number;
  name: string;
};

type OptionProps = {
  option: OptionType;
  onClick: (value: string) => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  className?: string;
};

const defaultProps = {
  className: '',
};

/**
 * @description Компонент-опция, возвращает элемент `li` с текстом
 *
 * @props
 * - option - { id: string, name: string } - данные для опции, name -- текст опции
 * - onClick - function - функция-обработчик клика, поднимает "наверх" значение `option.name`
 * - onKeyDown - function - функция-обработчик при нажатии на клавишу клавиатуры
 * - className - string - css-класс миксин
 */

function Option({ option, onClick, onKeyDown, className }: OptionProps) {
  const onOptionClick = () => {
    onClick(option.name);
  };

  return (
    <li
      className={classnames(styles.option, className)}
      onClick={onOptionClick}
      onKeyDown={onKeyDown}
      role="option"
      aria-selected
      value={option.name}
    >
      {option.name}
    </li>
  );
}

Option.defaultProps = defaultProps;

export default Option;
