import { Outlet } from 'react-router-dom';
import { Header } from '../header';

/**
 * @description Основной лейаут для сайта из шапки и основного контента, который меняется в зависимости от роута
 * */

function BaseLayout() {
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
