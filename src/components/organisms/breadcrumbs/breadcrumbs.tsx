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

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  className,
  breadcrumbs,
}) => {
  const breadcrumbsToRender = useBreadcrumbs(breadcrumbs);
  return (
    <div className={classnames(styles.breadcrumbs, className)}>
      {breadcrumbsToRender.map((breadcrumb, i) => (
        <span className={styles.breadcrumb} key={breadcrumb.path}>
          <StyledLink
            className={`${styles.link} 
            ${breadcrumb.notActive ? styles.notActive : ''}`}
            href={breadcrumb.path}
            linkText={breadcrumb.title}
          />
          {i + 1 !== breadcrumbsToRender.length && <Icon type="arrowRight" />}
        </span>
      ))}
    </div>
  );
};
