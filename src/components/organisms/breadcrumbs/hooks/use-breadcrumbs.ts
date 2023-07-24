import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import type { RouteType } from 'router/types';
import { routes } from 'config';
import type { BreadcrumbType } from '../types';

/**
 * Хук `useBreadcrumbs` возвращает массив объектов для отрисовки ссылок в компоненте `Breadcrumbs`.
 * Пока рассчитан только на страницу Курса и возвращает моковые данные.
 * Нужна доработка после интеграции с бекендом.
 *
 * @returns \{ path, title \} - массив объектов хлебных крошек.
 * */

export const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);

  const match = (path: string) => matchPath({ path, end: false }, pathname);

  const clearBreadcrumbs = () => {
    if (breadcrumbs.length > 0) {
      setBreadcrumbs([]);
    }
  };

  const updateBreadcrumbs = (routesArray: RouteType[]) => {
    routesArray.forEach((route) => {
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

          // вложенные маршруты
          route.children?.forEach((childRoute) => {
            const childPath = match(`${route.path}/${childRoute.path}`);
            if (childPath) {
              setBreadcrumbs((prevState) => [
                ...prevState,
                {
                  path: childPath.pathname,
                  title: childRoute.mockTitle,
                },
              ]);
            }
          });
        }
      }
    });
  };

  useEffect(() => {
    clearBreadcrumbs();
    updateBreadcrumbs(Object.values(routes));
  }, [pathname]);

  return breadcrumbs;
};
