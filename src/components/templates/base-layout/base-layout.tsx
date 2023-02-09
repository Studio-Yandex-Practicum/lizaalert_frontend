import { Outlet, useLocation } from 'react-router-dom';
import { Header } from 'components/templates/header';
import useScrollToTop from 'hooks/use-scroll-to-top';

/**
 * Основной лейаут для сайта из шапки и основного контента, который меняется в зависимости от роута.
 * Также страницу подкидывает наверх при переходе на новый роут.
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
