import { createElement, CSSProperties, FC } from 'react';
import classnames from 'classnames';
import styles from './typography.module.scss';
import type { TypographyProps } from './types';

/**
 * Компонент-конструктор текстового контента, возвращает элемент заголовка, `<p>`, `<span>`, `<li>` или `<time>`.
 * Также в качестве props принимает все стандартные HTML-атрибуты для заголовка, абзаца и спана.
 * По умолчанию возвращает `<p>` с размером `m` и начертанием `normal`.
 */

export const Typography: FC<TypographyProps> = ({
  text = '',
  children = null,
  size = 'm',
  className,
  htmlTag = 'p',
  weight = 'normal',
  withOverflow,
  lines = 0,
  textAlign = 'left',
  ...props
}) => {
  const style: CSSProperties = {};

  if (lines > 0) {
    style.WebkitLineClamp = lines;
  }

  if (textAlign !== 'left') {
    style.textAlign = textAlign;
  }

  return createElement(
    htmlTag,
    {
      ...props,
      className: classnames(
        styles.typography,
        styles[size],
        styles[weight],
        {
          [styles.overflow]: withOverflow,
          [styles.lineClamp]: lines > 0,
        },
        className
      ),
      style,
    },
    children ?? text
  );
};
