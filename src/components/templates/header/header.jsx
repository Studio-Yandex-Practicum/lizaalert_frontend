import { useLocation, NavLink } from 'react-router-dom';
import HeaderLink from '../../molecules/header-link/header-link';
import routes from '../../../config/routes';
import styles from './header.module.scss';

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <NavLink to={routes.courses.path} className={styles.headerTextLink}>
          <h1 className={styles.headerText}>Учебная платформа</h1>
        </NavLink>
        <ul className={styles.headerLinks}>
          <li>
            <HeaderLink
              text={routes.courses.title}
              link={routes.courses.path}
              // Если route для курсов изменится, можно будет удалить splitLocation[1] === ''
              isActive={
                (splitLocation[1] === routes.courses.path ||
                  splitLocation[1] === '') &&
                true
              }
            />
          </li>
          <li>
            <HeaderLink
              text={routes.profile.title}
              link={routes.profile.path}
              isActive={splitLocation[1] === routes.profile.path && true}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
