import type { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { StyledLink } from 'components/molecules/styled-link';
import styles from './breadcrumbs.module.scss';
import type { BreadcrumbsProps, ClientBreadcrumbs } from './types';
import { useBreadcrumbs } from './hooks/use-breadcrumbs';

/**
 * Компонент хлебных крошек, создает цепочку вложенных роутов.
 * */

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  className,
  breadcrumbs,
  currentLessonId,
  currentLessonTitle,
}) => {
  const currentLessonBreadcrumb: Pick<ClientBreadcrumbs, 'lesson'> = {
    lesson: {
      path: `${currentLessonId}`,
      title: currentLessonTitle,
    },
  };
  const breadcrumbsArray = useBreadcrumbs(breadcrumbs, currentLessonBreadcrumb);

  return (
    <div className={classnames(styles.breadcrumbs, className)}>
      {breadcrumbsArray.map((breadcrumb, i) => (
        <span className={styles.breadcrumb} key={breadcrumb.path}>
          <StyledLink
            className={styles.link}
            href={breadcrumb.path}
            linkText={breadcrumb.title}
          />
          {i + 1 !== breadcrumbsArray.length && <Icon type="arrowRight" />}
        </span>
      ))}
    </div>
  );
};
