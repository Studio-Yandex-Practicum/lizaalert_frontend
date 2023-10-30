import { useEffect, useState } from 'react';
import type { BreadcrumbsType } from '../types';

/**
 * Хук `useBreadcrumbs` возвращает массив объектов для отрисовки ссылок в компоненте `Breadcrumbs`.
 * Принимает объект с данными хлебных крошек текущего урока.
 *
 * @returns \{ path, title \} - массив объектов хлебных крошек.
 * */

export const useBreadcrumbs = <T extends BreadcrumbsType>(breadcrumbs: T) => {
  const [breadcrumbsArray, setBreadcrumbsArray] = useState<BreadcrumbsType>([]);

  /*
  TODO изменить реализацию хука, если изменится дефолтный роутинг.
  В данный момент роутинг реализован так:
  / - все курсы
  /courses - роуты курса, урока и т.д.
  При конкатенации этих двух строк, роут получается формата //route
  */
  const breadcrumbsToRender = breadcrumbs.reduce<BreadcrumbsType>(
    (arr, breadcrumb, i) => {
      if (i === 0 || i === 1) {
        const crumb = {
          path: breadcrumb.path,
          title: breadcrumb.title,
          notActive: breadcrumb.notActive ?? false,
        };
        arr.push(crumb);
      } else {
        const crumb = {
          path: `${arr[i - 1].path}/${breadcrumb.path}`,
          title: breadcrumb.title,
          notActive: breadcrumb.notActive ?? false,
        };
        arr.push(crumb);
      }
      return arr;
    },
    []
  );

  const clearBreadcrumbs = () => {
    if (!breadcrumbs) {
      setBreadcrumbsArray([]);
    }
  };

  const updateBreadcrumbs = () => {
    setBreadcrumbsArray(breadcrumbsToRender);
  };

  useEffect(() => {
    clearBreadcrumbs();
    updateBreadcrumbs();
  }, [breadcrumbs]);

  return breadcrumbsArray;
};
