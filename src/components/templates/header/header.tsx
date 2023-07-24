import { Children, FC } from 'react';
import { Heading } from 'components/atoms/typography';
import { HeaderLink } from 'components/molecules/header-link';
import { StyledLink } from 'components/molecules/styled-link';
import type { RouteType } from 'router/types';
import { isAdmin, routes } from 'config';
import styles from './header.module.scss';

/**
 * Компонент-шапка с заголовком h1, обернутым в ссылку, и списком навигационных ссылок.
 * */

export const Header: FC = () => {
  let headerRoutes: RouteType[] = [routes.courses, routes.profile];
  if (isAdmin) {
    headerRoutes = [routes.users, routes.library, ...headerRoutes];
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <StyledLink href={routes.courses.path}>
          <Heading level={1} weight="bold" text="Учебная платформа" />
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
};
