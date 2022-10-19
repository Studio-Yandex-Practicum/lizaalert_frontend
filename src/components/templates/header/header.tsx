import { Children } from 'react';
import { Heading } from 'components/atoms/heading';
import { HeaderLink } from 'components/molecules/header-link';
import { StyledLink } from 'components/molecules/styled-link';
import { RouteType } from 'types/route.types';
import { isAdmin, routes } from 'config';
import styles from './header.module.scss';

/**
 * Компонент-шапка с заголовком h1, обернутым в ссылку, и списком навигационных ссылок.
 * */

function Header() {
  let headerRoutes: RouteType[] = [routes.courses, routes.profile];
  if (isAdmin) {
    headerRoutes = [routes.users, routes.library, ...headerRoutes];
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <StyledLink href={routes.courses.path}>
          <Heading level={1} size="m" title="Учебная платформа" />
        </StyledLink>
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
