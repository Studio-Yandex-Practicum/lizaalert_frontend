import { createElement, HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './heading.module.scss';
import { HeadingProps } from './types';

/**
 * Компонент-конструктор заголовка, возвращает элемент `<h{level}>` или `<p>`, если нужен подзаголовок.
 */

function Heading({
  level = 2,
  title = '',
  children = null,
  size = 'xl',
  isSubheading = false,
  className = '',
  ...props
}: HeadingProps & HTMLAttributes<HTMLHeadingElement>) {
  return createElement(
    isSubheading ? 'p' : `h${level > 6 || level < 1 ? 2 : level}`,
    {
      ...props,
      className: classnames(styles.heading, styles[size], className),
    },
    children ?? title
  );
}

export default Heading;
