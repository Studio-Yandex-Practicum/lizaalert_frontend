import { Link } from 'react-router-dom';
import HeaderLink from '../../molecules/header-link/header-link';
import routes from '../../../config/routes';
import styles from './header.module.scss';

function Header() {
  const renderRoutes = [routes.courses, routes.profile];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to={routes.courses.path} className={styles.headerTextLink}>
          <h1 className={styles.headerText}>Учебная платформа</h1>
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

export default Header;
