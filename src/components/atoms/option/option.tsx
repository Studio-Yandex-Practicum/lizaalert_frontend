import classnames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './option.module.scss';
import { OptionProps } from './types';

/**
 * @description Компонент-опция, возвращает элемент `li` с текстом
 *
 * @props
 * - option - { id: string, name: string } - данные для опции, name -- текст опции
 * - onClick - function - функция-обработчик клика, поднимает "наверх" значение `option.name`
 * - onKeyDown - function - функция-обработчик при нажатии на клавишу клавиатуры
 * - className - string - css-класс миксин
 * - стандартные атрибуты HTML для `<li>`
 */

function Option({
  option,
  onClick,
  onKeyDown,
  className = '',
  ...props
}: OptionProps & HTMLAttributes<HTMLLIElement>) {
  const onOptionClick = () => {
    onClick(option.name);
  };

  return (
    <li
      {...props}
      className={classnames(styles.option, className)}
      onClick={onOptionClick}
      onKeyDown={onKeyDown}
      aria-selected
      value={option.name}
      role="option"
    >
      {option.name}
    </li>
  );
}

export default Option;
