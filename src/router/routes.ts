import type { RouteType } from './types';

export const defaultRoutes: Record<string, RouteType> = {
  courses: {
    title: 'Курсы',
    path: '/',
    icon: 'course',
  },
  course: {
    title: 'Курс',
    path: '/course',
    icon: 'course',
    children: [
      {
        path: ':courseId',
        mockTitle: 'Кинологическое направление',
      },
      {
        path: ':courseId/:topicId',
        mockTitle:
          '5. Работа «второго номера» совместно со следовым кинологическим расчётом',
      },
      {
        path: ':courseId/:topicId/:lessonId',
        mockTitle: 'Дрессировка поисково-спасательных собак',
      },
    ],
  },
  profile: {
    title: 'Профиль',
    path: '/profile',
    icon: 'userCircle',
  },
  register: {
    title: 'Регистрация',
    path: '/register',
    icon: 'userSquare',
  },
  login: {
    title: 'Вход',
    path: '/login',
    icon: 'userSquare',
  },
  notFound: {
    title: 'Страница не найдена',
    path: '/notFound',
    icon: 'xSolid',
  },
};
