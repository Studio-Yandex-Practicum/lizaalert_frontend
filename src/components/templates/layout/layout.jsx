import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';

function Layout({ routes, mainLinkHref }) {
  return (
    <div>
      <Header routes={routes} mainLinkHref={mainLinkHref} />
      <Outlet />
    </div>
  );
}

Layout.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  mainLinkHref: PropTypes.string.isRequired,
};

export default Layout;
