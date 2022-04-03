import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import routes from '../../../config/routes';

function Layout() {
  return (
    <div>
      <Header links={[routes.courses, routes.profile]} />
      <Outlet />
    </div>
  );
}

export default Layout;
