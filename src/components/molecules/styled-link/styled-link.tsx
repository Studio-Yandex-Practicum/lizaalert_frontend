import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styled-link.module.scss';
import { StyledLinkProps } from './types';

/**
 * @description Компонент для оборачивания компонента или текста в стилизованную ссылку.
 *
 * @props
 * - children - ReactNode - компонент, который нужно обернуть в ссылку. Имеет приоритет перед текстом.
 * - href - string, required - путь для ссылки.
 * - linkText - string - текст, который нужно обернуть в ссылку.
 * - isExternal - boolean - флаг того, является ли ссылка внешней. При `true` ссылка откроется в новом окне. Также ей будет добавлен атрибут `rel="noopener noreferrer"`.
 * - weight - enum ('bold' | 'semibold' | 'normal') - жирность шрифта. По умолчанию `semibold`.
 * - className - string - класс-миксин для стилизации ссылки.
 * - стандартные атрибуты HTML для `<a>`.
 * */

function StyledLink({
  children = null,
  linkText = '',
  isExternal = false,
  href,
  weight = 'semibold',
  className = '',
  ...props
}: StyledLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!children && !linkText) {
    return null;
  }

  const classNames = classnames(styles.link, styles[weight], className);

  if (isExternal) {
    return (
      <a
        {...props}
        className={classNames}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children ?? linkText}
      </a>
    );
  }

  return (
    <Link {...props} className={classNames} to={href}>
      {children ?? linkText}
    </Link>
  );
}

export default StyledLink;
