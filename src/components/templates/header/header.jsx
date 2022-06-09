import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { Heading } from '../../atoms';
import { HeaderLink } from '../../molecules';
import styles from './header.module.scss';
import routes from '../../../config/routes';

let compare;
let compare2;

function Header({ isAdmin }) {
  const [state, setState] = useState(1);
  let renderRoutes = [routes.courses, routes.profile];
  if (isAdmin) {
    renderRoutes = [routes.users, routes.library, ...renderRoutes];
  }

  compare2 = compare;
  console.log({ compare2 });

  const handleClick = useCallback(() => {
    console.log('clicked');
    setState((prev) => prev + 1);
  }, []);

  compare = handleClick;
  console.log({ compare });
  console.log({ state });
  console.log({ isSame: compare === compare2 });

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to={routes.courses.path} className={styles.headerLink}>
          <Heading level={1} size="m" title="Учебная платформа" />
        </Link>
        <nav>
          <ul className={styles.headerLinks}>
            {renderRoutes.map((route) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <li key={route.id} onClick={handleClick}>
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
