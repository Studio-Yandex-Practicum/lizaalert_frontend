import { Children } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../../atoms';
import { HeaderLink } from '../../molecules';
import styles from './header.module.scss';
import { isAdmin, routes } from '../../../config';

function Header() {
  let headerRoutes = [routes.courses, routes.profile];
  if (isAdmin) {
    headerRoutes = [routes.users, routes.library, ...headerRoutes];
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to={routes.courses.path} className={styles.headerLink}>
          <Heading level={1} size="m" title="Учебная платформа" />
        </Link>
        <nav>
          <ul className={styles.headerLinks}>
            {Children.toArray(
              headerRoutes.map((route) => (
                <li>
                  <HeaderLink
                    text={route.title}
                    iconType={route.icon}
                    link={route.path}
                  />
                </li>
              ))
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
