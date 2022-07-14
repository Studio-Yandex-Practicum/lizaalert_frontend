import { createElement, ReactNode } from 'react';
import classnames from 'classnames';
import styles from './card.module.scss';

type CardHtmlTags = 'article' | 'div' | 'li' | 'aside' | 'section';

export type CardProps = {
  className?: string;
  children: ReactNode;
  noPadding?: boolean;
  htmlTag?: CardHtmlTags;
};

const defaultProps = {
  className: '',
  noPadding: false,
  htmlTag: 'div',
};

/**
 * @description Компонент карточки. Визуальный элемент интерфейса с закругленными углами, тенью и паддингами, которые при необходимости обнуляются
 *
 * @props
 * - className - string - дополнительный css-класс для стилизации
 * - children - ReactNode - контент, который нужно вставить в карточку
 * - noPadding - boolean - проп, позволяющий обнулить паддинги. По умолчанию false, т.е. у карточки имеются стандартные паддинги 32px
 * - htmlTag - string - тип тега-контейнера html для семантики: 'article', 'div', 'li', 'aside'. По умолчанию div.
 */

function Card({ className, children, noPadding, htmlTag }: CardProps) {
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

Card.defaultProps = defaultProps;

export default Card;
