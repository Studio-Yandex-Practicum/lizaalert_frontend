import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './with-link.module.scss';

type WithLinkProps = {
  component: FunctionComponent;
  href: string;
  isExternal?: boolean;
  weight?: 'bold' | 'semibold' | 'normal';
  className?: string;
};

const defaultProps = {
  isExternal: false,
  className: '',
  weight: 'semibold',
};

function WithLink({
  component: Component,
  isExternal,
  href,
  weight = 'semibold',
  className,
  ...props
}: WithLinkProps) {
  const classNames = classnames(styles.link, styles[weight], className);

  if (isExternal) {
    return (
      <a
        className={classNames}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Component {...props} />
      </a>
    );
  }

  return (
    <Link className={classNames} to={href}>
      <Component {...props} />
    </Link>
  );
}

WithLink.defaultProps = defaultProps;

export default WithLink;
