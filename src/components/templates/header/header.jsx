import { Link } from 'react-router-dom';
import { Heading } from '../../atoms';
import { HeaderLink } from '../../molecules';
import routes from '../../../config/routes';
import styles from './header.module.scss';

function Header() {
  const renderRoutes = [routes.courses, routes.profile];

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

export default Header;
