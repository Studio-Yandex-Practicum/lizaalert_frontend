import { createElement } from 'react';
import classnames from 'classnames';
import styles from './card.module.scss';
import { CardProps } from './types';

/**
 * Компонент карточки. Визуальный элемент интерфейса с закругленными углами, тенью и паддингами, которые при необходимости обнуляются.
 */

function Card({
  className = '',
  children,
  noPadding = false,
  htmlTag = 'div',
}: CardProps) {
  return createElement(
    htmlTag ?? 'div',
    {
      className: classnames(
        styles.card,
        { [styles.cardNoPadding]: noPadding },
        className
      ),
    },
    children
  );
}

export default Card;
