import type { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styled-link.module.scss';
import type { StyledLinkProps } from './types';

/**
 * Компонент для оборачивания компонента или текста в стилизованную ссылку.
 * Может принимать в качестве пропсов стандартные атрибуты HTML для `<a>`.
 * */

export const StyledLink: FC<StyledLinkProps> = ({
  children = null,
  linkText = '',
  isExternal,
  isNavigation,
  href,
  weight = 'medium',
  color = 'default',
  className,
  ...props
}) => {
  if (!children && !linkText) {
    return null;
  }

  const classNames = classnames(
    styles.link,
    styles[weight],
    styles[color],
    className
  );

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

  if (isNavigation) {
    return (
      <NavLink
        {...props}
        className={({ isActive }) =>
          classnames(classNames, { [styles.active]: isActive })
        }
        to={href}
        end
      >
        {children ?? linkText}
      </NavLink>
    );
  }

  return (
    <Link {...props} className={classNames} to={href}>
      {children ?? linkText}
    </Link>
  );
};
