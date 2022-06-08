import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';

function Layout({ headerRoutes, mainPageHref }) {
  return (
    <div>
      <Header routes={headerRoutes} mainPageHref={mainPageHref} />
      <Outlet />
    </div>
  );
}

Layout.propTypes = {
  headerRoutes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  mainPageHref: PropTypes.string.isRequired,
};

export default Layout;
