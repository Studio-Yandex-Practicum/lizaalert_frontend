import { Outlet, useLocation } from 'react-router-dom';
import { useScrollToTop } from 'hooks';
import { Header } from '../header';

/**
 * @description Основной лейаут для сайта из шапки и основного контента, который меняется в зависимости от роута
 * */

function BaseLayout() {
  const { pathname } = useLocation();

  useScrollToTop(pathname);

  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default BaseLayout;
