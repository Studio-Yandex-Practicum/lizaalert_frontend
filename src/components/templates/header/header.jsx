import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderLink from '../../molecules/header-link/header-link';
import routes from '../../../config/routes';
import styles from './header.module.scss';

function Header({ links }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer})`}>
        <Link to={routes.courses.path} className={styles.headerTextLink}>
          <h1 className={styles.headerText}>Учебная платформа</h1>
        </Link>
        <nav>
          <ul className={styles.headerLinks}>
            {links.map((link) => (
              <li key={link.id}>
                <HeaderLink
                  text={link.title}
                  iconType={link.icon}
                  link={link.path}
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Header;
