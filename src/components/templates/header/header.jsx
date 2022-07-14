import { Children } from 'react';
import { Heading } from '../../atoms';
import { HeaderLink, WithLink } from '../../molecules';
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
        <WithLink
          href={routes.courses.path}
          component={Heading}
          level={1}
          size="m"
          title="Учебная платформа"
        />
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
