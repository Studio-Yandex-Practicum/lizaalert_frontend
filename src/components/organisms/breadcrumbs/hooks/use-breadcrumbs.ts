import { useEffect, useState } from 'react';
import { routes } from 'config';
import type {
  ClientBreadcrumbData,
  ClientBreadcrumbs,
  ServerBreadcrumbs,
} from '../types';

/**
 * Хук `useBreadcrumbs` возвращает массив объектов для отрисовки ссылок в компоненте `Breadcrumbs`.
 * Принимает объект ServerBreadcrumbs и объект с данными текущего урока.
 *
 * @returns \{ path, title \} - массив объектов хлебных крошек.
 * */

export const useBreadcrumbs = <
  T extends ServerBreadcrumbs,
  H extends Pick<ClientBreadcrumbs, 'lesson'>
>(
  breadcrumbs: T,
  currentLesson: H
) => {
  const [breadcrumbsArray, setBreadcrumbsArray] = useState<
    ClientBreadcrumbData[]
  >([]);
  const coursesBreadcrumb: ClientBreadcrumbData = {
    path: `${routes.courses.path}`,
    title: routes.courses.title,
  };
  const courseBreadcrumb: ClientBreadcrumbData = {
    path: `${routes.course.path}/${breadcrumbs.course.id}`,
    title: breadcrumbs.course.title,
  };
  const chapterBreadcrumb: ClientBreadcrumbData = {
    path: `${routes.course.path}/${breadcrumbs.course.id}/${breadcrumbs.chapter.id}`,
    title: breadcrumbs.chapter.title,
  };
  const lessonBreadcrumb: ClientBreadcrumbData = {
    path: `${routes.course.path}/${breadcrumbs.course.id}/${breadcrumbs.chapter.id}/${currentLesson.lesson.path}`,
    title: currentLesson.lesson.title,
  };

  const clearBreadcrumbs = () => {
    if (!breadcrumbs) {
      setBreadcrumbsArray([]);
    }
  };

  const updateBreadcrumbs = () => {
    setBreadcrumbsArray([
      coursesBreadcrumb,
      courseBreadcrumb,
      chapterBreadcrumb,
      lessonBreadcrumb,
    ]);
  };

  useEffect(() => {
    clearBreadcrumbs();
    updateBreadcrumbs();
  }, []);

  return breadcrumbsArray;
};
