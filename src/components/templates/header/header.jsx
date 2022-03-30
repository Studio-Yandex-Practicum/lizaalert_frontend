import { useLocation } from 'react-router-dom';
import HeaderLink from '../../molecules/header-link/header-link';
import routes from '../../../config/routes';
import styles from './header.module.scss';

function Header() {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerText}>Учебная платформа</h1>
        <ul className={styles.headerLinks}>
          <li>
            <HeaderLink
              text="Курсы"
              link={routes.courses.path}
              isActive={splitLocation[1] === '' && true}
            />
          </li>
          <li>
            <HeaderLink
              text="Профиль"
              link={routes.profile.path}
              isActive={splitLocation[1] === 'profile' && true}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
