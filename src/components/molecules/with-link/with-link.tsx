import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './with-link.module.scss';

type WithLinkProps = {
  component?: FunctionComponent;
  href: string;
  linkText?: string;
  isExternal?: boolean;
  weight?: 'bold' | 'semibold' | 'normal';
  className?: string;
};

const defaultProps = {
  component: null,
  linkText: '',
  isExternal: false,
  className: '',
  weight: 'semibold',
};

/**
 * @description Компонент-HOC для оборачивания компонента или текста в ссылку.
 *
 * @props
 * - component - FunctionComponent - функциональный компонент Реакта, который нужно обернуть в ссылку. Имеет приоритет перед текстом.
 * - href - string - путь для ссылки.
 * - linkText - string - текст, который нужно обернуть в ссылку.
 * - isExternal - boolean - флаг того, является ли ссылка внешней. При `true` ссылка откроется в новом окне. Также ей будет добавлен атрибут `rel="noopener noreferrer"`.
 * - weight - enum ('bold' | 'semibold' | 'normal') - жирность шрифта. По умолчанию `semibold`.
 * - className - string - класс-миксин для стилизации ссылки.
 *
 * Остальные пропсы передаются напрямую в оборачиваемый компонент.
 * */

function WithLink({
  component: Component,
  linkText,
  isExternal,
  href,
  weight = 'semibold',
  className,
  ...props
}: WithLinkProps) {
  if (!Component && !linkText) {
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
        {Component ? <Component {...props} /> : linkText}
      </a>
    );
  }

  return (
    <Link className={classNames} to={href}>
      {Component ? <Component {...props} /> : linkText}
    </Link>
  );
}

WithLink.defaultProps = defaultProps;

export default WithLink;
