import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '../../atoms';
import useBreadcrumbs from './hooks/use-breadcrumbs';
import styles from './breadcrumbs.module.scss';

type BreadcrumbsProps = {
  className?: string;
};

const defaultProps = {
  className: '',
};

/**
 * @description Компонент хлебных крошек, создает цепочку вложенных роутов.
 *
 * @props
 * - className - string - класс-миксин для стилизации контейнера
 * */

function Breadcrumbs({ className }: BreadcrumbsProps) {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className={classnames(styles.breadcrumbs, className)}>
      {breadcrumbs.map((link, i) => (
        <span className={styles.breadcrumb} key={link.path}>
          <Link className={styles.link} to={link.path}>
            {link.title}
          </Link>
          {i + 1 !== breadcrumbs.length && (
            <Icon type="arrowRight" className={styles.icon} />
          )}
        </span>
      ))}
    </div>
  );
}

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
