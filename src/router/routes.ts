import type { RouteType } from './types';

export const SUBROUTES = {
  courseId: ':courseId',
  chapterId: ':chapterId',
  lessonId: ':lessonId',
  complete: 'complete',
};

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
    children: {
      course: {
        path: SUBROUTES.courseId,
      },
      chapter: {
        path: `${SUBROUTES.courseId}/${SUBROUTES.chapterId}`,
      },
      lesson: {
        path: `${SUBROUTES.courseId}/${SUBROUTES.chapterId}/${SUBROUTES.lessonId}`,
      },
      complete: {
        title: 'Курс завершен',
        path: `${SUBROUTES.courseId}/${SUBROUTES.complete}`,
      },
    },
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
