import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import routes from '../config/routes';

/**
 * Хук useBreadcrumbs возвращает массив объектов для отрисовки ссылок в компоненте Breadcrumbs
 * Рассчитан только на страницу Курса и возвращает моковые данные
 * Доработка после интеграции с бекендом
 * */
const useBreadcrumbs = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const match = (path) => matchPath({ path, end: false }, location.pathname);

  const getBreadcrumbs = () => {
    Object.values(routes).forEach((route) => {
      if (route.path !== routes.notFound.path) {
        // корень
        const root = match(route.path);
        if (root) {
          setBreadcrumbs((prevState) => [
            ...prevState,
            {
              path: root.pathname,
              title: routes.courses.title,
            },
          ]);
        }

        // вложенные маршруты
        route.children?.forEach((child) => {
          const childPath = match(`${route.path}/${child.path}`);
          if (childPath) {
            setBreadcrumbs((prevState) => [
              ...prevState,
              {
                path: childPath.pathname,
                title: child.mockTitle,
              },
            ]);
          }
        });
      }
    });
  };

  useEffect(() => {
    getBreadcrumbs();
  }, []);

  return breadcrumbs;
};

export default useBreadcrumbs;
