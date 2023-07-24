import { createElement, FC } from 'react';
import classnames from 'classnames';
import styles from './card.module.scss';
import type { CardProps } from './types';

/**
 * Компонент карточки.
 * Визуальный элемент интерфейса с закругленными углами, тенью и паддингами, которые при необходимости обнуляются.
 */

export const Card: FC<CardProps> = ({
  className,
  children,
  noPadding,
  htmlTag = 'div',
}) =>
  createElement(
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
