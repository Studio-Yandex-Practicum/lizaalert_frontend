import { createElement, ReactNode } from 'react';
import classnames from 'classnames';
import styles from './heading.module.scss';

type HeadingSizes = 'xxl' | 'xl' | 'l' | 'm';

export type HeadingProps = {
  level?: number;
  title?: ReactNode | string;
  children?: ReactNode;
  size?: HeadingSizes;
  isSubheading?: boolean;
  className?: string;
};

const defaultProps = {
  level: 2,
  title: '',
  children: null,
  size: 'xl',
  isSubheading: false,
  className: '',
};

/**
 * @description Компонент-конструктор заголовка, возвращает элемент `<h{level}>` или `<p>`, если нужен подзаголовок.
 *
 * @props
 * - level - number - уровень заголовка от 1 до 6. Если число не входит в этот диапазон или не передано, то возвращается заголовок `<h2>`.
 * - title - string | node - контент заголовка, может быть текстом или элементом
 * - children - string | node - контент заголовка, может быть текстом или элементом. Имеет приоритет перед title!
 * - size - string - размер заголовка из заранее определенных стилей: `xxl`, `xl`, `l`, `m` из font-variables. По-умолчанию `xl`.
 * - isSubheading - boolean - при передаче этого пропса вернется элемент `<p>`, по умолчанию false.
 * - className - string - css-класс миксин для передачи своих стилей
 */

function Heading({
  level = 2,
  title,
  children,
  size = 'xl',
  isSubheading,
  className,
}: HeadingProps) {
  return createElement(
    isSubheading ? 'p' : `h${level > 6 || level < 1 ? 2 : level}`,
    { className: classnames(styles.heading, styles[size], className) },
    children ?? title
  );
}

Heading.defaultProps = defaultProps;

export default Heading;
