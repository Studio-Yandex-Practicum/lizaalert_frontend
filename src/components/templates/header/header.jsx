import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heading } from '../../atoms';
import { HeaderLink } from '../../molecules';
import styles from './header.module.scss';

function Header({ routes, mainPageHref }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to={mainPageHref} className={styles.headerLink}>
          <Heading level={1} size="m" title="Учебная платформа" />
        </Link>
        <nav>
          <ul className={styles.headerLinks}>
            {React.Children.toArray(
              routes.map((route) => (
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

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  mainPageHref: PropTypes.string.isRequired,
};

export default Header;
