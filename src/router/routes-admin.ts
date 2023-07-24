import type { RouteType } from './types';
import { defaultRoutes } from './routes';

export const adminRoutes: Record<string, RouteType> = {
  ...defaultRoutes,
  createCourse: {
    title: 'Создание нового курса',
    path: '/course/create',
    icon: 'plus',
  },
  editCourse: {
    title: 'Редактирование курса',
    path: '/course/edit',
    icon: 'edit',
  },
  editLesson: {
    title: 'Редактирование урока',
    path: '/course/lesson/edit',
    icon: 'edit',
  },
  users: {
    title: 'Пользователи',
    path: '/users',
    icon: 'users',
  },
  library: {
    title: 'Библиотека',
    path: '/library',
    icon: 'library',
  },
};
