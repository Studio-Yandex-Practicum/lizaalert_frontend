import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heading } from '../../atoms';
import { HeaderLink } from '../../molecules';
import styles from './header.module.scss';
import routes from '../../../config/routes';

function Header({ isAdmin }) {
  let renderRoutes = [];
  if (isAdmin) {
    renderRoutes = [
      routes.users,
      routes.library,
      routes.courses,
      routes.profile,
    ];
  } else {
    renderRoutes = [routes.courses, routes.profile];
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to={routes.courses.path} className={styles.headerLink}>
          <Heading level={1} size="m" title="Учебная платформа" />
        </Link>
        <nav>
          <ul className={styles.headerLinks}>
            {renderRoutes.map((route) => (
              <li key={route.id}>
                <HeaderLink
                  text={route.title}
                  iconType={route.icon}
                  link={route.path}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  isAdmin: PropTypes.bool,
};

Header.defaultProps = {
  isAdmin: false,
};

export default Header;
