const routes = {
  courses: {
    id: 1,
    title: 'Курсы',
    path: '/',
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
    id: 2,
    title: 'Профиль',
    path: '/profile',
    icon: 'userCircle',
  },
  register: {
    id: 3,
    title: 'Регистрация',
    path: '/register',
    icon: 'userSquare',
  },
  login: {
    id: 4,
    title: 'Вход',
    path: '/login',
    icon: 'userSquare',
  },
  notFound: {
    id: 5,
    title: 'Страница не найдена',
    path: '/*',
    icon: 'XSolid',
  },
  users: {
    id: 6,
    title: 'Пользователи',
    path: '/users',
    icon: 'users',
  },
  library: {
    id: 7,
    title: 'Библиотека',
    path: '/library',
    icon: 'library',
  },
};

export default routes;
