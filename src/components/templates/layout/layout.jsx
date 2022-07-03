import { Outlet } from 'react-router-dom';
import Header from '../header/header';

function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
