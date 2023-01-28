import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styled-link.module.scss';
import type { StyledLinkProps } from './types';

/**
 * Компонент для оборачивания компонента или текста в стилизованную ссылку.
 * Может принимать в качестве пропсов стандартные атрибуты HTML для `<a>`.
 * */

function StyledLink({
  children = null,
  linkText = '',
  isExternal = false,
  href,
  weight = 'medium',
  className = '',
  ...props
}: StyledLinkProps) {
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
