import type { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { StyledLink } from 'components/molecules/styled-link';
import styles from './breadcrumbs.module.scss';
import type { BreadcrumbsProps } from './types';
import { useBreadcrumbs } from './hooks/use-breadcrumbs';

/**
 * Компонент хлебных крошек, создает цепочку вложенных роутов.
 * */

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className={classnames(styles.breadcrumbs, className)}>
      {breadcrumbs.map((link, i) => (
        <span className={styles.breadcrumb} key={link.path}>
          <StyledLink
            className={styles.link}
            href={link.path}
            linkText={link.title}
          />
          {i + 1 !== breadcrumbs.length && <Icon type="arrowRight" />}
        </span>
      ))}
    </div>
  );
};
