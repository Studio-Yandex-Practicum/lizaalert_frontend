import classnames from 'classnames';
import { Icon } from '../../atoms/icon';
import { StyledLink } from '../../molecules/styled-link';
import useBreadcrumbs from './hooks/use-breadcrumbs';
import styles from './breadcrumbs.module.scss';
import { BreadcrumbsProps } from './types';

/**
 * @description Компонент хлебных крошек, создает цепочку вложенных роутов.
 *
 * @props
 * - className - string - класс-миксин для стилизации контейнера
 * */

function Breadcrumbs({ className = '' }: BreadcrumbsProps) {
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
}

export default Breadcrumbs;
