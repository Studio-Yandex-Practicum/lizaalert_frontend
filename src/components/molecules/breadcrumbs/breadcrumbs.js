import { Link } from 'react-router-dom';
import { Icon } from '../../atoms';
import { useBreadcrumbs } from '../../../hooks';
import styles from './breadcrumbs.module.scss';

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((link, i) => (
        <span className={styles.breadcrumb} key={link.path}>
          <Link className={styles.link} to={link.path}>
            {link.title}
          </Link>
          {i !== breadcrumbs.length - 1 && (
            <Icon type="arrowRight" className={styles.icon} />
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
