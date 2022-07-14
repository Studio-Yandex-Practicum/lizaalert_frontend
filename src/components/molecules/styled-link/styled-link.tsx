import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styled-link.module.scss';

type StyledLinkProps = {
  children?: ReactNode;
  href: string;
  linkText?: string;
  isExternal?: boolean;
  weight?: 'bold' | 'semibold' | 'normal';
  className?: string;
};

const defaultProps = {
  children: null,
  linkText: '',
  isExternal: false,
  className: '',
  weight: 'semibold',
};

/**
 * @description Компонент для оборачивания компонента или текста в стилизованную ссылку.
 *
 * @props
 * - children - ReactNode - компонент, который нужно обернуть в ссылку. Имеет приоритет перед текстом.
 * - href - string - путь для ссылки.
 * - linkText - string - текст, который нужно обернуть в ссылку.
 * - isExternal - boolean - флаг того, является ли ссылка внешней. При `true` ссылка откроется в новом окне. Также ей будет добавлен атрибут `rel="noopener noreferrer"`.
 * - weight - enum ('bold' | 'semibold' | 'normal') - жирность шрифта. По умолчанию `semibold`.
 * - className - string - класс-миксин для стилизации ссылки.
 *
 * Остальные пропсы передаются напрямую в оборачиваемый компонент.
 * */

function StyledLink({
  children,
  linkText,
  isExternal,
  href,
  weight = 'semibold',
  className,
}: StyledLinkProps) {
  if (!children && !linkText) {
    return null;
  }

  const classNames = classnames(styles.link, styles[weight], className);

  if (isExternal) {
    return (
      <a
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
    <Link className={classNames} to={href}>
      {children ?? linkText}
    </Link>
  );
}

StyledLink.defaultProps = defaultProps;

export default StyledLink;
